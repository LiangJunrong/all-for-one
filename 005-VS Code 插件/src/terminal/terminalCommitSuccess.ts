import * as vscode from 'vscode';

// 监听自定义命令
const terminalCommitSuccess = vscode.commands.registerCommand('jsliang.terminalCommitSuccess', async () => {
  // 获取当前（终端 || undefined） -> 如果没有则创建
  const terminal = vscode.window.activeTerminal || vscode.window.createTerminal("jsliang 终端");;
  
  // 获取当前文本路径
  const activeTextEditor:any = vscode.window.activeTextEditor;
  const path = activeTextEditor._documentData._uri.fsPath;
  const text = activeTextEditor._documentData._lines[0];

  // 保存当前文件
  await vscode.window.activeTextEditor?.document.save();

  console.log('======git commit 记录======');
  console.log('当前终端 terminal：', terminal);
  console.log('当前路径 path：', path);
  console.log('第一行文本 text：', text);

  terminal.show();
  terminal.sendText(`git add "${path}"`);
  terminal.sendText(`git commit -m "完成 - ${text}"`);
});

module.exports = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(terminalCommitSuccess);
};