import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from "fs";
import util from './util';

class OpenFile implements vscode.DefinitionProvider {
  provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.Definition> {
    const fileName    = document.fileName;
    const workDir     = path.dirname(fileName);
    const word        = document.getText(document.getWordRangeAtPosition(position));
    const lineText    = document.lineAt(position).text;
    const projectPath = util.getProjectPath(document);

    console.log('====== 关键字段列表 ======');
    console.log('当前文件名     ：' + fileName);
    console.log('当前文件所在目录：' + workDir);
    console.log('当前光标所在单词：' + word);
    console.log('当前光标所在行  ：' + lineText);
    console.log('当前工程目录    ：' + projectPath);

    let targetPath = workDir;

    // 1. 根据 ES6 的 'import ... from ...' 来查找路径
    if (lineText.includes('import') && lineText.includes('from')) {

      // 2. 匹配单引号里面的内容
      const fragment = lineText.match(/(?<=').*?(?=')/);
      // 3. 如果有匹配，并且匹配次数为 1 -> 才能构成路径
      if (fragment && fragment.length === 1) {
        const matchContent = fragment[0];

        // 3.1 匹配 './' 或者 '../'
        if (matchContent.includes('./') || matchContent.includes('../')) {

          // 3.1.1 分割当前工程目录路径
          const pathFragment = targetPath.split('/');

          // 3.1.2 匹配引号里面的回退次数，即 '../' 的次数
          const matchFragment = matchContent.match(/\.\.\//g);
          if (matchFragment) {
            for (let i = 0; i < matchFragment.length; i++) {
              const sliceFrag = pathFragment.pop();
              if (sliceFrag) {
                targetPath = targetPath.slice(0, targetPath.indexOf(sliceFrag));
              }
            }
            targetPath += matchContent.slice(matchContent.lastIndexOf('../') + 3);
          } else { // 3.1.3 匹配到引号里面只有 './'
            const sliceFrag = pathFragment.pop();
            if (sliceFrag) {
              targetPath = targetPath.slice(0, targetPath.indexOf(sliceFrag));
            }
            targetPath += matchContent.slice(matchContent.lastIndexOf('./') + 2);
          }
          
        } else if (matchContent.includes('src')) { // 3.2 匹配根路径下的 'src'
          targetPath = workDir.slice(0, workDir.indexOf('src')) + matchContent;
        }

        // 3.3 可以省略后缀 .js 或者 .jsx
        const pathList = [
          targetPath + '.js',
          targetPath + '.jsx',
          targetPath,
        ];
        for (let i = 0; i < pathList.length; i++) {
          if (fs.existsSync(pathList[i])) {
            targetPath = pathList[i];
          }
        }

      }
    }

    console.log('目标路径       ：', targetPath);

    // 4. 检测路径是否存在，存在则打开，不存在则弹窗提示
    if (fs.existsSync(targetPath)) {
      return new vscode.Location(vscode.Uri.file(targetPath), new vscode.Position(0, 0));
    } else {
      vscode.window.showErrorMessage(`jsliang 提示：找不到路径 ${targetPath}，请检查下代码是否有误~`);
    }

  }
}

module.exports = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.languages.registerDefinitionProvider('javascriptreact', new OpenFile()),
  );
};