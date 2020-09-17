"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
// 代码注释功能
const functionNotes = vscode.commands.registerCommand('jsliang.functionComments', (lang, // 文件类型
selection, // 光标位置
nowLineText, // 光标位置的文本
pos) => {
    var _a, _b, _c, _d;
    // 找到文件类型
    lang = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.languageId;
    console.log(lang);
    // js 文件或者 jsx 文件
    if ((lang === 'javascript') || (lang === 'javascriptreact')) {
        // 找到当前选择光标的位置
        selection = (_b = vscode.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.selection;
        // 找到该行的文本
        nowLineText = (_c = vscode.window.activeTextEditor) === null || _c === void 0 ? void 0 : _c.document.lineAt(selection.start.line).text;
        // 开始的行数
        const startLine = selection.start.line;
        // 设置需要插入的位置 { line: 0, character: 1}
        pos = new vscode.Position(startLine, 0);
        /*
          ---非接口---
          function data1(abc, def) {
          const data2 = function(abc, def) {
          const data3 = (abc, def) => {
          const data4 = abc => {
          ---接口---
          export function getList1(params) {
          export const getList2 = function(params) {
          export const getList3 = (abc, def) => {
          export const getList4 = abc => {
        */
        // 拼装普通函数注释
        const getFnText = (fnName, argName) => {
            let insertText = '';
            insertText += '/**\n';
            insertText += `* @name ${fnName}\n`;
            insertText += `* @description 功能描述\n`;
            if (!(argName.length === 1 && argName[0] === '')) {
                for (let i = 0; i < argName.length; i++) {
                    insertText += `* @param {any} ${argName[i]}\n`;
                }
            }
            insertText += '* @return 接口返回\n';
            insertText += '*/\n';
            return insertText;
        };
        // 拼装接口函数注释
        const getApiText = (fnName, argName) => {
            let insertText = '';
            insertText += '/**\n';
            insertText += `* @name ${fnName}\n`;
            insertText += `* @description API接口描述\n`;
            insertText += `* @address API接口文档地址\n`;
            if (!(argName.length === 1 && argName[0] === '')) {
                for (let i = 0; i < argName.length; i++) {
                    insertText += `* @param {any} ${argName[i]}\n`;
                }
            }
            insertText += '* @return 接口返回\n';
            insertText += '*/\n';
            return insertText;
        };
        let insertText = ''; // 插入的文本
        let eqLength = 0; // 等号个数
        for (let i = 0; i < nowLineText.length; i++) {
            if (nowLineText[i] === '=') {
                eqLength++;
            }
        }
        // ES5 方法
        if (nowLineText.includes('function')) {
            let firstIndex = 0; // 开始索引
            let lastIndex = nowLineText.length; // 结束索引
            let fnName = ''; // 方法名称
            const argName = nowLineText.match(/\(([^)]*)\)/)[1].split(',').map((item) => item.trim()); // 参数名称
            // 没有 = 号、长度为 1的三种判断
            if (eqLength === 0) {
                lastIndex = nowLineText.indexOf('(');
                if (nowLineText.length - lastIndex > 0) {
                    firstIndex = nowLineText.lastIndexOf(' ', lastIndex);
                    fnName = nowLineText.slice(firstIndex + 1, lastIndex);
                }
            }
            else if (eqLength === 1) {
                lastIndex = nowLineText.indexOf('=');
                if (nowLineText.length - lastIndex > 0) {
                    const str = nowLineText.slice(firstIndex, lastIndex).trim().split(' ');
                    fnName = str[str.length - 1];
                }
            }
            // 组装内容
            if (nowLineText.includes('export')) { // 接口函数
                insertText = getApiText(fnName, argName);
            }
            else { // 非接口函数
                insertText = getFnText(fnName, argName);
            }
        }
        else if (nowLineText.includes('=>')) { // ES6 方法
            let firstIndex = 0; // 开始索引
            let lastIndex = nowLineText.length; // 结束索引
            let fnName = ''; // 方法名称
            let argName = []; // 参数名称
            // 没有 = 号、长度为 1的三种判断
            if (eqLength >= 2) {
                firstIndex = nowLineText.indexOf('=');
                lastIndex = nowLineText.indexOf('=', firstIndex + 1);
                const tempName = nowLineText.slice(0, firstIndex).trim().split(' ');
                fnName = tempName[tempName.length - 1];
                const tempArg = nowLineText.slice(firstIndex + 1, lastIndex).trim();
                if (tempArg.includes('(')) {
                    argName = [...(tempArg.slice(1, tempArg.length - 1).split(',').map((item) => item.trim()))];
                }
                else {
                    argName.push(tempArg);
                }
            }
            // 组装内容
            if (nowLineText.includes('export')) { // 接口函数
                insertText = getApiText(fnName, argName);
            }
            else { // 非接口函数
                insertText = getFnText(fnName, argName);
            }
        }
        // 插入内容
        (_d = vscode.window.activeTextEditor) === null || _d === void 0 ? void 0 : _d.edit((editBuilder) => {
            editBuilder.insert(pos, insertText);
        });
    }
});
module.exports = (context) => {
    context.subscriptions.push(functionNotes);
};
//# sourceMappingURL=functionNotes.js.map