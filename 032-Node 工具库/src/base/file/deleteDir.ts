import shell from 'shelljs';

export const deleteDir = async (path: string): Promise<boolean> => {
  /**
   * cmd.exe：rd /s /q <path>
   * PowerShell：rd -r <path>
   * Mac：rm -rf <path>
   * ShellJS：rm() 删除文件，rm('rf', <path>) 删除文件夹
   */
  await shell.rm('-rf', path);
  return true;
};