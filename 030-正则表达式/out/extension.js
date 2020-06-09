"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const nodeDependencies_1 = require("./nodeDependencies");
const practice_1 = require("./practice");
function activate(context) {
    console.log('欢迎进入 jsliang 的正则表达式插件');
    const nodeDependenciesProvider = new nodeDependencies_1.DepNodeProvider(vscode.workspace.rootPath || '');
    const nodePractice = new practice_1.Practice(vscode.workspace.rootPath || '');
    vscode.window.registerTreeDataProvider('study', nodeDependenciesProvider);
    vscode.window.registerTreeDataProvider('practice', nodePractice);
    vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName => vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map