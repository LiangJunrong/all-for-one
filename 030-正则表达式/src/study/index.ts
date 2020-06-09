import * as vscode from 'vscode';

export class Study implements vscode.TreeDataProvider<Dependency> {

	private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined> = new vscode.EventEmitter<Dependency | undefined>();

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	getTreeItem(element: Dependency): vscode.TreeItem {
		return element;
	}

	getChildren(): Thenable<Dependency[]> {
		const catalogs = [
			'001-前言',
			'002-正则创建方式',
			'003-正则验证',
			'004-元字符',
			'005-匹配模式',
			'006-命名分组和零宽断言',
			'007-总结',
		];
		const resolveJson = catalogs.map(catalog => {
			return new Dependency(
				catalog,
				vscode.TreeItemCollapsibleState.None,
				{
					command: 'extension.openPractice',
					title: 'openPractice',
					arguments: [catalog]
				},
			);
		});

		console.log('当前路径：', resolveJson);

		return Promise.resolve(resolveJson);
	}
}

export class Dependency extends vscode.TreeItem {
	constructor(
		public readonly label: string, // 大号标题
		public readonly collapsibleState: vscode.TreeItemCollapsibleState, // 是否可折叠
		public readonly command?: vscode.Command, // 是否绑定命令
	) {
		super(label, collapsibleState);
	}
}
