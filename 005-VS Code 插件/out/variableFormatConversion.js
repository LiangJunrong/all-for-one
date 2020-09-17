"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
// 代码风格转变
const functionNotes = vscode.commands.registerCommand('jsliang.variableFormatConversion', () => {
    var _a;
    // 找到文件类型
    const lang = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.languageId;
    console.log('------类型转换------');
    console.log('语言（lang）：', lang);
    const editor = vscode.window.activeTextEditor;
    console.log('编辑器（editor）：', editor);
    const allSelections = editor === null || editor === void 0 ? void 0 : editor.selections;
    console.log('所有选择（allSelections）：', allSelections);
    // 转换顺序 text_style -> textStyle -> TextStyle -> TEXT_STYLE -> text-style
    editor === null || editor === void 0 ? void 0 : editor.edit(editBuilder => {
        allSelections === null || allSelections === void 0 ? void 0 : allSelections.forEach(selection => {
            const text = editor === null || editor === void 0 ? void 0 : editor.document.getText(selection);
            const style = util_1.default.getStyle(text);
            console.log('替换的位置（selection）：', selection);
            console.log('选择的内容（text）：', text);
            switch (style) {
                case 'php':
                    editBuilder.replace(selection, util_1.default.toCamelCase(text));
                    break;
                case 'camel':
                    editBuilder.replace(selection, util_1.default.toPascal(text));
                    break;
                case 'pascal':
                    editBuilder.replace(selection, util_1.default.toConstant(text));
                    break;
                case 'constant':
                    editBuilder.replace(selection, util_1.default.toKebab(text));
                    break;
                case 'kebab':
                    editBuilder.replace(selection, util_1.default.toPhp(text));
                    break;
                default:
                    break;
            }
        });
    });
});
module.exports = (context) => {
    context.subscriptions.push(functionNotes);
};
//# sourceMappingURL=variableFormatConversion.js.map