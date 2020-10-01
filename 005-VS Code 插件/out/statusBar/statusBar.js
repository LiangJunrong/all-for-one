"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
// 监听自定义命令
const statusBar = vscode.commands.registerCommand('jsliang.statusBar', () => {
});
module.exports = (context) => {
    context.subscriptions.push(statusBar);
};
//# sourceMappingURL=statusBar.js.map