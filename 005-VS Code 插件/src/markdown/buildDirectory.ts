import * as vscode from 'vscode';
import * as fs from "fs";

// 自动生成目录
const buildDirectory = vscode.commands.registerTextEditorCommand('jsliang.buildDirectory', async (textEditor: any, edit: any) => {
  const lines = textEditor._documentData._lines; // 所有文本以 数组 形式展示
  const fsPath = textEditor._documentData._uri.fsPath; // 当前文本绝对路径

  // 保存当前文件
  await vscode.window.activeTextEditor?.document.save();

  console.log('======自动生成目录信息======');
  console.log('所有文本：', lines);
  console.log('文本路径：', fsPath);
  
  // 英文字典
  const englishHash = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'night', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nighteen',
    'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-night',
    'thirty', 'thirty-one', 'thirty-two', 'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven', 'thirty-eight', 'thirty-night',
    'fourty', 'fourty-one', 'fourty-two', 'fourty-three', 'fourty-four', 'fourty-five', 'fourty-six', 'fourty-seven', 'fourty-eight', 'fourty-night',
    'fifty', 'fifty-one', 'fifty-two', 'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven', 'fifty-eight', 'fifty-night',
  ];
  
  // 中文字典
  const chineseHash = [
    '零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九',
    '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九',
    '三十', '三十一', '三十三', '三十三', '三十四', '三十五', '三十六', '三十七', '三十八', '三十九',
    '四十', '四十一', '四十四', '四十四', '四十四', '四十五', '四十六', '四十七', '四十八', '四十九',
    '五十', '五十一', '五十五', '五十五', '五十五', '五十五', '五十六', '五十七', '五十八', '五十九',
  ];

  // 目录模板
  // 
  // | 目录 |
  // | --- | 
  // | [一 目录](#chapter-one) | 
  // | <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

  // 设置目录
  let category = `<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
`;

  // 设置目录标签：二级标题-四级标题
  let twoCategory = 1;
  let threeCategory = 0;
  let fourCategory = 0;

  // 设置新的目录行
  const categoryLine: string[] = [];

  // 查找并清空原目录
  const clearCategory = (categoryName:string) => {
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
        categoryLine.push(`#### <a name="chapter-${englishHash[twoCategory]}-${englishHash[threeCategory]}-${englishHash[fourCategory]}" id="chapter-${englishHash[twoCategory]}-${englishHash[threeCategory]}-${englishHash[fourCategory]}"></a>${twoCategory}.${threeCategory}.${fourCategory} ${categoryName}

> [返回目录](#chapter-one)
`);

        // 追加目录
        category += `| &emsp;&emsp;[${twoCategory}.${threeCategory}.${fourCategory} ${categoryName}](#chapter-${englishHash[twoCategory]}-${englishHash[threeCategory]}-${englishHash[fourCategory]}) |\r\n`;

      } else if (lineText.includes('###')) { // 如果当前行是三级标题
      
        // 行数累加，碰到三级标题清空四级标题累加
        threeCategory++;
        fourCategory = 0;

        // 将本次的新目录添加进数组
        categoryLine.push(`### <a name="chapter-${englishHash[twoCategory]}-${englishHash[threeCategory]}" id="chapter-${englishHash[twoCategory]}-${englishHash[threeCategory]}"></a>${twoCategory}.${threeCategory} ${categoryName}

> [返回目录](#chapter-one)
`);
  
        // 追加目录
        category += `| &emsp;[${twoCategory}.${threeCategory} ${categoryName}](#chapter-${englishHash[twoCategory]}-${englishHash[threeCategory]}) |\r\n`;
  
      } else if (!lineText.includes('一 目录')) { // 如果当前行是二级标题且非目录
        
        // 行数累加，碰到二级标题清空三级和四级标题累加
        twoCategory++;
        threeCategory = 0;
        fourCategory = 0;
  
        // 将本次的新目录添加进数组
        categoryLine.push(`## <a name="chapter-${englishHash[twoCategory]}" id="chapter-${englishHash[twoCategory]}"></a>${chineseHash[twoCategory]} ${categoryName}

> [返回目录](#chapter-one)
`);
  
        // 追加目录
        category += `| <a name="catalog-chapter-${englishHash[twoCategory]}" id="catalog-chapter-${englishHash[twoCategory]}"></a>[${chineseHash[twoCategory]} ${categoryName}](#chapter-${englishHash[twoCategory]}) |\r\n`;
      }
    }
  }

  category += '<!-- 目录结束 -->\r\n\r\n';

  // 设置新的 markdown 文本
  let newMarkdown = '';

  // 设置判断是否存在目录
  let hasCategory = false;

  // 查找文本/更新文本、添加新目录/删除旧目录
  for (let i = 0; i < lines.length; i++) {

    let lineText = lines[i];

    if (lineText.includes('目录开始')) { // 如果原本存在目录，那么更新它

      newMarkdown += category;
      hasCategory = true;
      i = lines.findIndex((item: any) => item.includes('目录结束')) + 1;
    } else if (lineText.includes('##')) { // 如果当前行是二级目录-四级目录

      // 如果原本不存在目录，此刻碰到新标题了，那么插入一个新目录
      if (!hasCategory) {
        newMarkdown += category;
        hasCategory = true;
      }
      newMarkdown += categoryLine.shift();
      
      // 如果已经生成过返回目录的跳转，那么就不在生成了
      if (i + 2 <= lines.length - 1 && lines[i + 2].includes('返回目录')) {
        i += 2;
      }
    } else if (lineText.includes('署名-非商业性使用-相同方式共享')) {
      newMarkdown += `> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。\r\n`;
    } else { // 如果当前行不是目录

      newMarkdown += `${lineText}${i !== lines.length - 1 ? '\r\n' : ''}`;
    }
  }

  fs.writeFile(fsPath, newMarkdown, (err) => {
    console.log('写入成功！');
  });

});

module.exports = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(buildDirectory);
};