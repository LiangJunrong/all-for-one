import * as vscode from 'vscode';
import util from './util';

// 代码风格转变
const functionNotes = vscode.commands.registerCommand('jsliang.variableFormatConversion', () => {

  // 找到文件类型
  const lang = vscode.window.activeTextEditor?.document.languageId;

  console.log('------类型转换------');
  console.log('语言（lang）：', lang);

  const editor = vscode.window.activeTextEditor;

  console.log('编辑器（editor）：', editor);

  const allSelections = editor?.selections;

  console.log('所有选择（allSelections）：', allSelections);

  // 转换顺序 text_style -> textStyle -> TextStyle -> TEXT_STYLE -> text-style

  editor?.edit(editBuilder => {
    allSelections?.forEach(selection => {
      const text = editor?.document.getText(selection);

      const style = util.getStyle(text);

      console.log('替换的位置（selection）：', selection);
      console.log('选择的内容（text）：', text);
      switch (style) {
        case 'php':
          editBuilder.replace(selection, util.toCamelCase(text));
          break;
        case 'camel':
          editBuilder.replace(selection, util.toPascal(text));
          break;
        case 'pascal':
          editBuilder.replace(selection, util.toConstant(text));
          break;
        case 'constant':
          editBuilder.replace(selection, util.toKebab(text));
          break;
        case 'kebab':
          editBuilder.replace(selection, util.toPhp(text));
          break;
        default:
          break;
      }
    });
  });
});

module.exports = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(functionNotes);
};