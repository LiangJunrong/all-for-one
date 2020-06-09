"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependency = exports.Study = void 0;
const vscode = require("vscode");
class Study {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren() {
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
            return new Dependency(catalog, vscode.TreeItemCollapsibleState.None, {
                command: 'extension.openPractice',
                title: 'openPractice',
                arguments: [catalog]
            });
        });
        console.log('当前路径：', resolveJson);
        return Promise.resolve(resolveJson);
    }
}
exports.Study = Study;
class Dependency extends vscode.TreeItem {
    constructor(label, // 大号标题
    collapsibleState, // 是否可折叠
    command) {
        super(label, collapsibleState);
        this.label = label;
        this.collapsibleState = collapsibleState;
        this.command = command;
    }
}
exports.Dependency = Dependency;
//# sourceMappingURL=index.js.map