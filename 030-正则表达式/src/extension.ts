import * as vscode from 'vscode';

import { regexTreeDataProvider } from "./explore/regexTreeDataProvider";
// import { regexPreviewProvider } from "./webview/regexPreviewProvider";

export function activate(context: vscode.ExtensionContext) {

	console.log('欢迎进入 jsliang 的正则表达式插件');

	context.subscriptions.push(
		// regexPreviewProvider,
		// vscode.window.createTreeView("regex", { treeDataProvider: regexTreeDataProvider, showCollapseAll: true }),
	);
}

export function deactivate() {}
