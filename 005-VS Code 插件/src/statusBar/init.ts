import * as vscode from 'vscode';

const createBar = (
  text: string,
  cmd?: string,
  tip?: string,
  color?: string,
) => {
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -2); // 右边新建一个
  statusBar.text = text;                // 文本
  if (cmd) statusBar.command = cmd;     // 指令
  if (tip) statusBar.tooltip = tip;     // 悬浮文本提示
  if (color) statusBar.color = color;   // 颜色
  statusBar.show();                     // 展示
};

const statusBar = () => {
  createBar('|');
  createBar('commit', 'jsliang.terminalCommit', 'git commit -m "xxx"', 'yellow');
  createBar('|');
  createBar('commitSuccess', 'jsliang.terminalCommitSuccess', 'git commit -m "完成 - xxx"', 'cyan');
  createBar('|');
};

module.exports = (context: vscode.ExtensionContext) => {
  statusBar();
};