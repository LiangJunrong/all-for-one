"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 模块（module） 'vscode' 包含了 VS Code 的可拓展性 API
// 导入这个模块并在下面代码中使用别名 vscode 来引用它
const vscode = require("vscode");
// 这个方法在激活扩展的时候调用
// 你的扩展在第一次执行命令时被激活
function activate(context) {
    // 使用控制台输出信息（console.log）和错误（console.error）
    // 当你的拓展被激活时，这一行代码将只执行一次
    console.log('Congratulations, your extension "005-vscodeplugin" is now active!');
    // 这个命令在 package.json 文件中被定义了
    // 现在用 registerCommand 命令实现，commandId 参数必须与 package.json 中的命令字段匹配
    let disposable = vscode.commands.registerCommand('005-vscodeplugin.HelloWorld', () => {
        // 你在这里配置的代码将在每次执行命令时被调用
        // 打印一个 Message 信息弹窗
        const message = 'Hello jsliang！这是你的第一个插件！';
        vscode.window.showInformationMessage(message);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// 当你的拓展被停用时会调用这个钩子
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map