import xlsx from 'node-xlsx';
import fs from 'fs';
import path from 'path';

export const exportLanguage = async (): Promise<boolean> => {
  const languageData = JSON.parse(fs.readFileSync(path.join(__dirname, './source.json'), 'utf8'));

  // 组装头部数据
  const header = Object.keys(languageData);

  // 组装内容数据
  const chineseKeyList = Object.keys(languageData['zh-CN']);
  const body: any[] = [];
  for (let i = 0; i < chineseKeyList.length; i++) {
    const nowKey = chineseKeyList[i];
    const nowFloor = [nowKey];
    for (let j = 0; j < header.length; j++) {
      const nowLanguage = header[j];
      nowFloor.push(languageData[nowLanguage][nowKey]);
    }
    body.push(nowFloor);
  }

  // 导出数据
  const data = [
    ['keys', ...header],
    ...body,
  ];
  const buffer = xlsx.build([{ name: "jsliang", data: data }]); // 拿到文件 buffer

  // 写入文件
  fs.writeFileSync(path.join(__dirname, './dist/Excel 导出文件.xlsx'), Buffer.from(buffer));

  return await true;
};