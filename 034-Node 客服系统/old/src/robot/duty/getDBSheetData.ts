import { IDBSheetConfig } from '../interface';

export default async (page: any, DUTY_CONFIG: IDBSheetConfig) => {
  console.log('获取 DBSheet 数据');

  // 获取 DBSheet 的数据
  return await page.evaluate(async (DUTY_CONFIG: IDBSheetConfig) => {
    const windowAny: any = window;

    // 等待时间
    const wait = (ms: number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(ms);
        }, ms);
      });
    }

    // 切换到第 Index 个 DBSheet 的表
    await windowAny.WPSOpenApi.Application.ActiveDBSheet.Sheet.SetActiveSheet({
      SheetIndex: DUTY_CONFIG.dbIndex,
    });

    await wait(5 * 1000);

    // 切换到第 Index 个视图
    if (DUTY_CONFIG.viewIndex) {
      await windowAny.APP.getActiveSheet().getDbSheetViews().item(DUTY_CONFIG.viewIndex - 1).activate();
    }

    await wait(5 * 1000);

    // 获取所有字段
    const fieldMap = {} as any; // 字段对应列
    const fieldsList = await windowAny.WPSOpenApi.Application.ActiveDBSheet.Field.GetAllFieldsList(); // 读取 DBSheet 字段信息
    fieldsList?.length && fieldsList.filter((i: any) => !i.IsHidden).forEach((item: any, index: number) => {
      if (DUTY_CONFIG.timeTitle === item.Name) { // 日期
        fieldMap['timeTitle'] = index;
      } else if (DUTY_CONFIG.staffOnDutyTitle.includes(item.Name)) { // 值班人员
        if (!fieldMap['staffOnDutyTitle']) {
          fieldMap['staffOnDutyTitle'] = [];
        }
        fieldMap['staffOnDutyTitle'].push(index);
      } else if (DUTY_CONFIG.ombudsmanTitle.includes(item.Name)) { // 监察员
        if (!fieldMap['ombudsmanTitle']) {
          fieldMap['ombudsmanTitle'] = [];
        }
        fieldMap['ombudsmanTitle'].push(index);
      }
    });

    // 获取当前表对应的记录数
    const length = await windowAny.WPSOpenApi.Application.ActiveDBSheet.View.GetRecordCount();

    // 获取用户信息
    const getUserInfo = async (
      infoList: any, // 存储所有信息的容器
      userInfo: any, // 初步获取的用户信息
      rowIndex: number, // 当前遍历到第 Index 行
      userIndex: number, // 用户信息在第 Index 行
    ) => {
      if (userInfo.includes('|')) {
        userInfo = await windowAny.APP.getActiveSheet().getActiveDbSheetView().getCellInfo(rowIndex, userIndex).getContacts()[0];
        infoList.push(userInfo);
      } else if (!isNaN(Number(userInfo))) {
        const lInfo = await windowAny.APP.getDbUserInfoManager().getUserInfo([userInfo]); // 获取该 id 的信息，传入数组
        infoList.push({
          name: lInfo[0].nickname, // 因为只传了一个，所以返回第 1 个（索引 0）
          id: userInfo,
        });
      } else {
        infoList.push({
          name: userInfo,
        });
      }
    };

    // 获取单条记录信息
    const getInfo = async (i: number, item: number, list: any) => {
      let userInfo = await windowAny.APP.dbUtil().getActiveView().getCellInfo(i, item).getCellString();
      if (userInfo.includes(',')) { // 如果 @多个人
        userInfo = userInfo.split(',');
        for (let j = 0; j < userInfo.length; j++) {
          await getUserInfo(list, userInfo[j], i, item);
        }
      } else { // 否则 @1个人
        await getUserInfo(list, userInfo, i, item);
      }
    }

    // 获取所有行数信息
    const fieldData = []; // 信息收集器
    for (let i = 0; i < length; i++) {
      // 获取时间
      const timeInfo = windowAny.APP.dbUtil().getActiveView().getCellInfo(i, fieldMap['timeTitle']).getCellString();

      // 获取值班人员
      const dutyInfo: any[] = [];
      fieldMap['staffOnDutyTitle']?.forEach(async (item: number) => {
        getInfo(i, item, dutyInfo);
      });

      // 获取监察员
      const ombudsmanInfo: any[] = [];
      fieldMap['ombudsmanTitle']?.forEach(async (item: number) => {
        getInfo(i, item, ombudsmanInfo);
      });

      // 添加到总信息中
      if (timeInfo) {
        fieldData.push({
          timeInfo,
          dutyInfo,
          ombudsmanInfo,
        });
      }
    }

    // 返回所有非空日期数据
    return fieldData;
  }, DUTY_CONFIG); // 传参
};