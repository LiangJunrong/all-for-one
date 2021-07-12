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
  const sheet1Data = workSheetsFromBuffer[0].data;
  /**
   * TODO: 根据资源进行导入
  [
    [ 'key', 'zh-CN', 'en-US', 'zh-TW', 'zh-GZ' ],
    [ 'noMoney', '我没钱啦！', 'I have no money', '我沒錢啦！', '我冇钱啦！' ]
  ]
   */

  // 获取头部数据
  const header = sheet1Data[0];
  
  const languageIndex = {};
  let keyIndex;
  for (let i = 0; i < header.length; i++) {
    // 查找 key 对应列
    if (header[i] === 'key') {
      keyIndex = i;
    } else {
      // 查找其他语言对应列
      languageIndex[header[i]] = i;
    }
  }
  if (keyIndex !== undefined && keyIndex < 0) {
    console.error('未找到 key 对应列！');
    return false;
  }

  const importData = {};
  
  console.log(language);

  return await true;
};