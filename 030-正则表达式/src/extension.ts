import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('欢迎进入 jsliang 的正则表达式插件');

	let disposable = vscode.commands.registerCommand('regex-study-and-practice.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from regex-study-and-practice!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
