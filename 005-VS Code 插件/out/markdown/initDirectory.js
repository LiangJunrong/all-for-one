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
const fs = require("fs");
// 自动生成目录
const initDirectory = vscode.commands.registerTextEditorCommand('jsliang.initDirectory', (textEditor, edit) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const lines = textEditor._documentData._lines; // 所有文本以 数组 形式展示
    const fsPath = textEditor._documentData._uri.fsPath; // 当前文本绝对路径
    // 保存当前文件
    yield ((_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.save());
    console.log('======自动生成目录信息======');
    console.log('所有文本：', lines);
    console.log('文本路径：', fsPath);
    // 中文字典
    const chineseHash = [
        '零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
        '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九',
        '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九',
        '三十', '三十一', '三十三', '三十三', '三十四', '三十五', '三十六', '三十七', '三十八', '三十九',
        '四十', '四十一', '四十四', '四十四', '四十四', '四十五', '四十六', '四十七', '四十八', '四十九',
        '五十', '五十一', '五十五', '五十五', '五十五', '五十五', '五十六', '五十七', '五十八', '五十九',
    ];
    // 设置目录标签：二级标题-四级标题
    let twoCategory = 0;
    let threeCategory = 0;
    let fourCategory = 0;
    // 设置新的目录行
    const categoryLine = [];
    // 查找并清空原目录
    const clearCategory = (categoryName) => {
        // 如果原本存在四级标题的，那么应该消除掉
        // 不要超过 20.20.20，否则不会剔除原目录
        for (let j = 20; j > 1; j--) {
            for (let k = 20; k > 0; k--) {
                for (let l = 20; l > 0; l--) {
                    if (categoryName.includes(`${j}.${k}.${l} `)) {
                        return categoryName.replace(`${j}.${k}.${l} `, '');
                    }
                }
            }
        }
        // 如果原本存在三级标题的，那么应该消除掉
        // 不要超过 20.20，否则不会剔除原目录
        // 反序，避免 20.20 删了 20.2 剩余 0 在哪
        for (let j = 20; j > 1; j--) {
            for (let k = 20; k > 0; k--) {
                if (categoryName.includes(`${j}.${k} `)) {
                    return categoryName.replace(`${j}.${k} `, '');
                }
            }
        }
        // 如果原本存在目录的，那么应该消除掉
        // 反序，避免十一的时候，删了十而剩下一
        for (let j = chineseHash.length - 1; j > 0; j--) {
            if (categoryName.includes(`${chineseHash[j]} `)) {
                return categoryName.replace(`${chineseHash[j]} `, '');
            }
        }
        return categoryName;
    };
    // 查找目录文本、添加目录行
    for (let i = 0; i < lines.length; i++) {
        let lineText = lines[i];
        // 如果是二级-四级标题
        if (lineText.includes('##')) {
            // 去掉原本的目录信息：<a name="chapter-two" id="chapter-two"></a>
            lineText = lineText.replace(/\<.+?\>/g, '');
            // 切割成数组 [0, n]
            const lineArr = lineText.split(' ');
            // 获取目录名 [1, n]
            let categoryName = lineArr.slice(1).join(' ');
            // 清空原标题
            categoryName = clearCategory(categoryName);
            // 注意：超过四级标题不生成目录
            if (lineText.includes('####')) { // 如果当前行是四级标题
                // 行数累加
                fourCategory++;
                // 将本次的新目录添加进数组
                categoryLine.push(`#### ${twoCategory}.${threeCategory}.${fourCategory} ${categoryName}\r\n`);
            }
            else if (lineText.includes('###')) { // 如果当前行是三级标题
                // 行数累加，碰到三级标题清空四级标题累加
                threeCategory++;
                fourCategory = 0;
                // 将本次的新目录添加进数组
                categoryLine.push(`### ${twoCategory}.${threeCategory} ${categoryName}\r\n`);
            }
            else if (!lineText.includes('一 目录')) { // 如果当前行是二级标题且非目录
                // 行数累加，碰到二级标题清空三级和四级标题累加
                twoCategory++;
                threeCategory = 0;
                fourCategory = 0;
                // 将本次的新目录添加进数组
                categoryLine.push(`## ${chineseHash[twoCategory]} ${categoryName}\r\n`);
            }
        }
    }
    // 设置新的 markdown 文本
    let newMarkdown = '';
    // 查找文本/更新文本、添加新目录/删除旧目录
    for (let i = 0; i < lines.length; i++) {
        let lineText = lines[i];
        if (lineText.includes('目录开始')) { // 如果原本存在目录，那么删除它
            i = lines.findIndex((item) => item.includes('目录结束')) + 1;
        }
        else if (lineText.includes('##')) { // 如果当前行是二级目录-四级目录
            newMarkdown += categoryLine.shift();
            // 如果已经生成过返回目录的跳转，那么就不在生成了
            if (i + 2 <= lines.length - 1 && lines[i + 2].includes('返回目录')) {
                i += 2;
            }
        }
        else if (lineText.includes('署名-非商业性使用-相同方式共享')) {
            newMarkdown += `> ![license 图](data:image/png;base64,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)<br/>jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。`;
        }
        else { // 如果当前行不是目录
            newMarkdown += `${lineText}${i !== lines.length - 1 ? '\r\n' : ''}`;
        }
    }
    fs.writeFile(fsPath, newMarkdown, (err) => {
        console.log('写入成功！');
    });
}));
module.exports = (context) => {
    context.subscriptions.push(initDirectory);
};
//# sourceMappingURL=initDirectory.js.map