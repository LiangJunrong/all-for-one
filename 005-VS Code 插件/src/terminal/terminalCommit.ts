import * as vscode from 'vscode';

// 监听自定义命令
const terminalCommit = vscode.commands.registerCommand('jsliang.terminalCommit', () => {
  // 获取当前终端 || undefined
  const terminal = vscode.window.activeTerminal;
  
  // 获取当前文本路径
  const activeTextEditor:any = vscode.window.activeTextEditor;
  const path = activeTextEditor._documentData._uri.fsPath;

  console.log(terminal);
  console.log(path);

  // 如果当前存在其他终端
  if (terminal) {
    console.log(1);
    terminal.sendText('git add .');
    terminal.sendText(`git commit -m "${path}"`);
  } else {
    console.log(2);
  }
});

module.exports = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(terminalCommit);
};