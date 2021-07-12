import xlsx from 'node-xlsx';
import fs from 'fs';
import path from 'path';

export const importLanguage = async (): Promise<boolean> => {
  const workSheetsFromBuffer = xlsx.parse(
    fs.readFileSync(
      path.join(__dirname, '/dist/Excel 试用文件.xlsx'),
    ),
  );
  console.log(workSheetsFromBuffer[0].data);
  /**
  [
    [ 'key', 'zh-CN', 'en-US', 'zh-TW', 'zh-GZ' ],
    [ 'noMoney', '我没钱啦！', 'I have no money', '我沒錢啦！', '我冇钱啦！' ]
  ]
   */

  return await true;
};