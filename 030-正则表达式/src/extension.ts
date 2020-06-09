import * as vscode from 'vscode';

import { DepNodeProvider } from './nodeDependencies';
import { Practice } from './practice';

export function activate(context: vscode.ExtensionContext) {

	console.log('欢迎进入 jsliang 的正则表达式插件');

	const nodeDependenciesProvider = new DepNodeProvider(vscode.workspace.rootPath || '');
	const nodePractice = new Practice(vscode.workspace.rootPath || '');
	vscode.window.registerTreeDataProvider('study', nodeDependenciesProvider);
	vscode.window.registerTreeDataProvider('practice', nodePractice);
	vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
}

export function deactivate() {}
