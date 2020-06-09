"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const nodeDependencies_1 = require("./practice/nodeDependencies");
const study_1 = require("./study");
function activate(context) {
    console.log('欢迎进入 jsliang 的正则表达式插件');
    Promise.resolve().then(() => require('./practice/nodeDependencies')).then();
    const nodeDependenciesProvider = new nodeDependencies_1.DepNodeProvider(vscode.workspace.rootPath || '');
    vscode.window.registerTreeDataProvider('practice', nodeDependenciesProvider);
    vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
    // 学习模块
    const nodeStudy = new study_1.Study();
    vscode.window.registerTreeDataProvider('study', nodeStudy);
    vscode.commands.registerCommand('extension.openPractice', catalog => {
        console.log('catalog：', catalog);
        const panel = vscode.window.createWebviewPanel(catalog, // 内部使用，这个 webView 的标识
        catalog, // 给用户显示的面板标题
        vscode.ViewColumn.One, // 给新的 webView 面板一个编辑器视图 One 代表第一列，正如我们会通过 | 进行视图分块一样
        {});
        const studyPath = `./study/${catalog}`;
        console.log('studyPath：', studyPath);
        Promise.resolve().then(() => require(studyPath)).then(res => {
            console.log('res：', res);
            panel.webview.html = res();
        }).catch(err => {
            vscode.window.showInformationMessage('这块内容尚未更新，去插件首页加 jsliang 微信催更吧~');
        });
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map