// 模块（module） 'vscode' 包含了 VS Code 的可拓展性 API
// 导入这个模块并在下面代码中使用别名 vscode 来引用它
import * as vscode from 'vscode';

// 这个方法在激活扩展的时候调用
// 你的扩展在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {

	// 使用控制台输出信息（console.log）和错误（console.error）
	// 当你的拓展被激活时，这一行代码将只执行一次
	console.log('你的扩展 jsliang 已被激活');

	require('./functionNotes')(context); // 代码注释功能：Command/Ctrl + Shift + I
	require('./variableFormatConversion')(context); // 代码大小写类型转换：Command/Ctrl + Shift + J
	require('./openFile')(context); // 打开文件功能：Command/Ctrl + 点击
	require('./buildDirectory')(context); // 自动生成目录

	require('./terminal/terminalCommit')(context); // git commit 提交 -> git add 当前文本 + git commit -m "选中文本"
	require('./terminal/terminalCommitSuccess')(context); // git commit 完成提交 -> git add 当前文本 + git commit -m "完成 - 选中文本"
}

// 当你的拓展被停用时会调用这个钩子
export function deactivate() {
	console.log('你的扩展 jsliang 已被释放');
}
