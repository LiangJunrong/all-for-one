import * as vscode from 'vscode';
import * as fs from "fs";

// 自动生成目录
const statisticsLog = vscode.commands.registerTextEditorCommand('jsliang.statisticsLog', async (textEditor: any, edit: any) => {
  const lines = textEditor._documentData._lines; // 所有文本以 数组 形式展示
  const fsPath = textEditor._documentData._uri.fsPath; // 当前文本绝对路径

  // 保存当前文件
  await vscode.window.activeTextEditor?.document.save();

  console.log('======自动生成目录信息======');
  console.log('所有文本：', lines);
  console.log('文本路径：', fsPath);

  // 获取文本对应的行数
  const getIndex = (str: string, index: number = 0) => {
    for (let i = index; i < lines.length; i++) {
      if (lines[i].includes(str)) {
        return i;
      }
    }
    return -1;
  }

  // 查看是否为日志文件
  let statisticsIndex = getIndex('任务统计');

  // 如果不是则终止
  if (!statisticsIndex) {
    return;
  }

  // 如果用户生成了目录
  const cagegoryEnd = getIndex('目录结束') + 1 || 0;
  if (cagegoryEnd) {
    statisticsIndex = getIndex('任务统计', cagegoryEnd);
  }

  // 如果是则开始统计
  let logText = '';

  // 获取所有文本
  for (let i = cagegoryEnd; i < statisticsIndex; i++) {
    logText += lines[i];
  }

  // 统计问号
  const questionTime = (logText.match(/(\?|？){1}/g) || []).length;
  // 统计大写 X
  const bigXTime = (logText.match(/X{1}/g) || []).length;
  // 统计小写 x
  const smallXTime = (logText.match(/x{1}/g) || []).length;
  // 统计 * [x] 的情况
  const completeTime = (logText.match(/\[x\]{1}/g) || []).length;
  // 统计 ! 的情况
  const otherTime = (logText.match(/(\!|！){1}/g) || []).length;

  // 今日制定番茄
  lines[getIndex('* 今日制定番茄')] = `* 今日制定番茄(?) : ${questionTime + bigXTime + smallXTime + otherTime - completeTime} 个`;
  // 总使用番茄
  lines[getIndex('* 总使用番茄')] = `* 总使用番茄(X+x) : ${bigXTime + smallXTime - completeTime} 个`;
  // 计划内的番茄
  lines[getIndex('* 计划内的番茄')] = `* 计划内的番茄(X) : ${bigXTime} 个`;
  // 计划外的番茄
  lines[getIndex('* 计划外的番茄')] = `* 计划外的番茄(x) : ${smallXTime - completeTime} 个`;
  // 多余规划番茄
  lines[getIndex('* 多余规划番茄')] = `* 多余规划番茄(!) : ${otherTime} 个`;

  let newMarkdown = '';

  for (let i = 0; i < lines.length; i++) {
    newMarkdown += `${lines[i]}${i !== lines.length - 1 ? '\r\n' : ''}`;
  }

  fs.writeFile(fsPath, newMarkdown, (err) => {
    console.log('写入成功！');
  });
});

module.exports = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(statisticsLog);
};