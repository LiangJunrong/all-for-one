import { IExcelConfig, IExcelData } from '../interface';

export default async (page: any, DUTY_CONFIG: IExcelConfig): Promise<IExcelData[]> => {
  console.log('获取 Excel 数据');

  // 获取 DBSheet 的数据
  return await page.evaluate(async (DUTY_CONFIG: IExcelConfig) => {
    const windowAny: any = window;
    const { timeTitle, questionTitle, component, reporter, report } = DUTY_CONFIG;

    // 获取所有行数信息
    const fieldData = []; // 信息收集器
    const getCellData = async (column: string, index: number) => {
      return await windowAny.WPSOpenApi.Application.Range(`${column}${index + 1}`).Text;
    };
    for (let i = 0; i < 1000; i++) {
      const timeText = await getCellData(timeTitle, i); // 反馈时间
      const reportText = await getCellData(report, i); // 录入人回复
      if (timeText && !reportText) {
        const questionText = await getCellData(questionTitle, i); // 问题简述
        const componentText = await getCellData(component, i); // 组件
        const reporterText = await getCellData(reporter, i); // 录入人
        fieldData.push({ timeText, questionText, componentText, reporterText, reportText });
      }
    }

    // 返回所有非空日期数据
    return fieldData;
  }, DUTY_CONFIG); // 传参
};