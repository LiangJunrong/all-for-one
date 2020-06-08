"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('欢迎进入 jsliang 的正则表达式插件');
    let disposable = vscode.commands.registerCommand('regex-study-and-practice.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from regex-study-and-practice!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map