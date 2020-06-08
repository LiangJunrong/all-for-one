"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// import { regexPreviewProvider } from "./webview/regexPreviewProvider";
function activate(context) {
    console.log('欢迎进入 jsliang 的正则表达式插件');
    context.subscriptions.push(
    // regexPreviewProvider,
    // vscode.window.createTreeView("regex", { treeDataProvider: regexTreeDataProvider, showCollapseAll: true }),
    );
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map