import * as vscode from 'vscode';

import { DepNodeProvider } from './practice/nodeDependencies';
import { Study } from './study';

export function activate(context: vscode.ExtensionContext) {

	console.log('欢迎进入 jsliang 的正则表达式插件');

	const nodeDependenciesProvider = new DepNodeProvider(vscode.workspace.rootPath || '');
	vscode.window.registerTreeDataProvider('practice', nodeDependenciesProvider);
	vscode.commands.registerCommand('extension.openPackageOnNpm', (moduleName, version) => {
		const reg = /@shein-components/;
		const v = version.replace('^', '');
		if (reg.test(moduleName)) {
			const name = moduleName.replace(reg, '');
			vscode.window.showInformationMessage('暂不支持 Shineout Pro 组件跳转');
		} else {
			vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`));
		}
	});
	
	// 学习模块
	const nodeStudy = new Study();
	vscode.window.registerTreeDataProvider('study', nodeStudy);
	vscode.commands.registerCommand('extension.openPractice', catalog => {
		console.log('catalog：', catalog);
		const panel = vscode.window.createWebviewPanel(
			catalog, // 内部使用，这个 webView 的标识
			catalog, // 给用户显示的面板标题
			vscode.ViewColumn.One, // 给新的 webView 面板一个编辑器视图 One 代表第一列，正如我们会通过 | 进行视图分块一样
			{}, // Webview 选项
		);
		const studyPath = `./study/${catalog}`;
		console.log('studyPath：', studyPath);
		import(studyPath).then(res => {
			console.log('res：', res);
			panel.webview.html = res();
		}).catch(err => {
			vscode.window.showInformationMessage('这块内容尚未更新，去插件首页加 jsliang 微信催更吧~');
		});
	});
}

export function deactivate() {}
