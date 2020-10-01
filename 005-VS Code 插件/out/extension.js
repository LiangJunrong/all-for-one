"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// 这个方法在激活扩展的时候调用
// 你的扩展在第一次执行命令时被激活
function activate(context) {
    // 使用控制台输出信息（console.log）和错误（console.error）
    // 当你的拓展被激活时，这一行代码将只执行一次
    console.log('你的扩展 jsliang 已被激活');
    require('./functionNotes')(context); // 代码注释功能：Command/Ctrl + Shift + I
    require('./variableFormatConversion')(context); // 代码大小写类型转换：Command/Ctrl + Shift + J
    require('./openFile')(context); // 打开文件功能：Command/Ctrl + 点击
    require('./buildDirectory')(context); // 自动生成目录
    require('./terminal/terminalCommit')(context); // git commit 提交 -> git add 当前文本 + git commit -m "选中文本"
    require('./terminal/terminalCommitSuccess')(context); // git commit 完成提交 -> git add 当前文本 + git commit -m "完成 - 选中文本"
}
exports.activate = activate;
// 当你的拓展被停用时会调用这个钩子
function deactivate() {
    console.log('你的扩展 jsliang 已被释放');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map