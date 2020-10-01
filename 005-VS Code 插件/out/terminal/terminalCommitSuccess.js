"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
// 监听自定义命令
const terminalCommitSuccess = vscode.commands.registerCommand('jsliang.terminalCommitSuccess', () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // 获取当前（终端 || undefined） -> 如果没有则创建
    const terminal = vscode.window.activeTerminal || vscode.window.createTerminal("jsliang 终端");
    ;
    // 获取当前文本路径
    const activeTextEditor = vscode.window.activeTextEditor;
    const path = activeTextEditor._documentData._uri.fsPath;
    const text = activeTextEditor._documentData._lines[0];
    // 保存当前文件
    yield ((_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.save());
    console.log('======git commit 记录======');
    console.log('当前终端 terminal：', terminal);
    console.log('当前路径 path：', path);
    console.log('第一行文本 text：', text);
    terminal.show();
    terminal.sendText(`git add "${path}"`);
    terminal.sendText(`git commit -m "完成 - ${text}"`);
}));
module.exports = (context) => {
    context.subscriptions.push(terminalCommitSuccess);
};
//# sourceMappingURL=terminalCommitSuccess.js.map