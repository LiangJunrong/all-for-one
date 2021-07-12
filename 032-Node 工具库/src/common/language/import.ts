import xlsx from 'node-xlsx';
import fs from 'fs';
import path from 'path';

export const importLanguage = async (): Promise<boolean> => {
  const language = JSON.parse(fs.readFileSync(path.join(__dirname, './source.json'), 'utf8'));

  const workSheetsFromBuffer = xlsx.parse(
    fs.readFileSync(
      path.join(__dirname, '/dist/Excel 试用文件.xlsx'),
    ),
  );

  const sheet1Data = workSheetsFromBuffer[0].data.map(i => i.map(j => String(j)));

  // 获取头部数据
  const header = sheet1Data[0];
  
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
      // 如果没有该种语言，则新增
      if (!language[fullLanguage[i]]) {
        language[fullLanguage[i]] = {};
      }
    }
  }

  // 获取内容数据
  const body = sheet1Data.slice(1);
  for (let i = 0; i < body.length; i++) {

    for (let j = 0; j < body[i].length; j++) {
      if (j !== keyIndex) {
        const nowLanguage = language[header[j]]; // 一个损耗性能的操作，每次都会读取新列表，但是我不想优化
        const nowKey = body[i][keyIndex]; // 获取这一行的 key
        nowLanguage[nowKey] = body[i][j]; // 替换 key
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, './source.json'), JSON.stringify(language, null, 2), 'utf8');

  return true;
};