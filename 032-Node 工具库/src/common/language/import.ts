import xlsx from 'node-xlsx';
import fs from 'fs';
import path from 'path';
import { language } from './source';

export const importLanguage = async (): Promise<boolean> => {
  const workSheetsFromBuffer = xlsx.parse(
    fs.readFileSync(
      path.join(__dirname, '/dist/Excel 试用文件.xlsx'),
    ),
  );

  /**
   * TODO: 根据资源进行导入
  [
    [ 'key', 'zh-CN', 'en-US', 'zh-TW', 'zh-GZ' ],
    [ 'noMoney', '我没钱啦！', 'I have no money', '我沒錢啦！', '我冇钱啦！' ]
  ]
   */

  const sheet1Data = workSheetsFromBuffer[0].data.map(i => i.map(j => String(j)));


  // 获取头部数据
  const header = sheet1Data[0];
  console.log('头部数据：', header);
  
  // 查找 key 对应列
  let keyIndex = 0;
  for (let i = 0; i < header.length; i++) {
    if (header[i] === 'key') {
      keyIndex = i;
      break;
    }
  }
  if (keyIndex < 0) {
    console.error('未找到 key 对应列！');
    return false;
  }

  // 设置资源内容
  const fullLanguage: any[] = [...Object.keys(language), ...header.filter((item: any) => item !== 'key')];
  const filterFullLanguage = new Set();
  for (let i = 0; i < fullLanguage.length; i++) {
    if (!filterFullLanguage.has(fullLanguage[i])) {
      filterFullLanguage.add(fullLanguage[i]);
      // 如果没有该种语言，则新增 // TODO: 待校验
      if (!language[fullLanguage[i]]) {
        language[fullLanguage[i]] = {};
      }
    }
  }
  console.log('去重数据：', filterFullLanguage);

  // 获取内容数据
  const body = sheet1Data.slice(1);
  console.log('内容数据：', body);
  for (let i = 0; i < body.length; i++) {

    for (let j = 0; j < body[i].length; j++) {
      if (j !== keyIndex) {
        const nowLanguage = language[header[j]]; // 一个损耗性能的操作，每次都会读取新列表，但是我不想优化
        const nowKey = body[i][keyIndex]; // 获取这一行的 key
        console.log(nowLanguage, nowKey, body, i, j);
        nowLanguage[nowKey] = body[i][j]; // 替换 key
        console.log('修改数据：', nowLanguage, nowKey);
      }
    }
  }
  
  console.log(language);

  return true;
};