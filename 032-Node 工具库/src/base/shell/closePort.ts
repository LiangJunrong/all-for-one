import shell from 'shelljs';

export const closePort = async (port: string): Promise<boolean> => {
  await shell.exec(`netstat -ano | findstr :${port}`);

  // Windows 下会返回一个端口占用清单，需要自行删除
  console.log('已找到上面清单列表，请执行指令删除端口：taskkill -F -PID PID号'); 

  return await true;
};