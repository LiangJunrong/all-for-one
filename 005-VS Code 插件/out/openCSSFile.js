"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const util_1 = require("./util");
class MyProvider {
    provideDefinition(document, position, token) {
        const fileName = document.fileName;
        const workDir = path.dirname(fileName);
        const word = document.getText(document.getWordRangeAtPosition(position));
        const lineText = document.lineAt(position).text;
        const projectPath = util_1.default.getProjectPath(document);
        console.log('====== 关键字段列表 ======');
        console.log('当前文件名: ' + fileName);
        console.log('当前文件所在目录: ' + workDir);
        console.log('当前光标所在单词: ' + word);
        console.log('当前光标所在行: ' + lineText);
        console.log('当前工程目录: ' + projectPath);
        let newPath = projectPath;
        // 根据 ES6 的 'import ... from ...' 来查找 - 相对路径
        if (lineText.includes('import') && lineText.includes('from')) {
            if (lineText.includes('./') || lineText.includes('../')) {
                // 匹配到引号里面的内容（单引号）
                const fragment = lineText.match(/(?<=').*?(?=')/);
                // 有匹配，并且匹配次数为 1 的时候，才进入下一步
                if (fragment && fragment.length === 1) {
                    const pathFragment = projectPath.split('/');
                    // 匹配引号里面的回退次数，即 '../' 的次数
                    const matchFragment = fragment[0].match(/\.\.\//g);
                    if (matchFragment) {
                        for (let i = 0; i < matchFragment.length; i++) {
                            const sliceFrag = pathFragment.pop();
                            if (sliceFrag) {
                                newPath = newPath.slice(0, newPath.indexOf(sliceFrag));
                            }
                        }
                        newPath += fragment[0].slice(fragment[0].lastIndexOf('../') + 3);
                    }
                    else { // 匹配到引号里面只有 './'
                        const sliceFrag = pathFragment.pop();
                        if (sliceFrag) {
                            newPath = newPath.slice(0, newPath.indexOf(sliceFrag));
                        }
                        newPath += fragment[0].slice(fragment[0].lastIndexOf('./') + 2);
                    }
                }
            }
            else if (lineText.includes('src')) {
                const fragment = lineText.match(/(?<=').*?(?=')/);
                if (fragment && fragment.length === 1) {
                    newPath = workDir + '/' + fragment[0];
                }
            }
        }
        // 检测路径是否存在，存在则打开，不存在则弹窗提示
        if (fs.existsSync(newPath)) {
            return new vscode.Location(vscode.Uri.file(newPath), new vscode.Position(0, 0));
        }
        else {
            vscode.window.showErrorMessage(`jsliang 提示：找不到路径 ${newPath}，请检查下代码是否有误~`);
        }
    }
}
// JSX 文件中跳转到 CSS 文件的支持
const openCSSFile = () => {
    vscode.languages.registerDefinitionProvider('javascriptreact', new MyProvider());
};
exports.default = openCSSFile;
//# sourceMappingURL=openCSSFile.js.map