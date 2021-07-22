/**
 * @name 删除空目录
 * @time 2021-05-28 17:45:41
 */
import fs from 'fs';

// 读取文件夹获取列表
const readDir = (filePath: string): string[] => {
  let files;
  try {
    files = fs.readdirSync(filePath);
  } catch {
    console.error('报错：文件路径不存在');
    return [];
  }
  return files || [];
};

// 遍历文件/文件夹
const recursion = (filePath: string): boolean => {
  if (!filePath) {
    console.error('报错：请输入查找路径');
    return false;
  }
  
  // 获取文件列表
  const files = readDir(filePath).map(item => `${filePath}/${item}`);

  files.forEach((item) => {
    // 判断文件格式
    const stat = fs.statSync(item);

    // 判断是文件夹
    if (stat.isDirectory()) {
      recursion(item);

      // 删除空文件夹
      if (!readDir(item).length) {
        fs.rmdirSync(item);
      }
    }
  });

  return true;
};

export const clearEmptyDir = async (filePath: string): Promise<boolean> => {
  console.log('开始清理空目录，清理目标：', filePath);
  await recursion(filePath);

  return true;
};