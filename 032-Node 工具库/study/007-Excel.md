Node XLSX
===

> Create by **jsliang** on **2021-06-03 17:55:35**  
> Recently revised in **2021-06-08 09:13:33**

在通过 Puppeteer 操作浏览器下载到 Excel 之后，我们终于可以将预备将多语言的操作玩出花来了。

本篇我们将通过 `node-xlsx`，对 Excel 进行多语言导入导出的操作。

## 前言

在服务端的工作中，生成报表并送给运营、产品进行分析应该是一门简单手艺。

但是在前端中，能这样耍的机会并不多，所以多语言操作是个好玩的点（没接触过的会觉得比较新鲜）。

当然，既然服务端可以，对 Node.js 来说，提供这种功能也无可厚非。

**jsliang** 非常懒，所以直奔主题打开 GitHub：

![图](./img/Excel-01.png)

那就第 1 个了，不要搞什么调研不调研的，对于非生产数据来说，我就是玩~

看第一行简介：`Excel file parser/builder that relies on js-xlsx.`

`js-xlsx`？这个我知道啊，再 `2021.06.03` 这一刻有 `25.7k` Star 的仓库地址：`https://github.com/SheetJS/sheetjs`

> 其实一开始试了下它关于 Node 的，enm...一时半会没入门！

但是，我还是用我的 `node-xlsx` 吧，毕竟例子都在它仓库的 README.md 贴出来了！

## 快速开始

* 安装包：`npm i node-xlsx -S`
* 安装 TypeScript：`npm i @types/node-xlsx -D`

### 测试导入

> src/index.ts

```js
import program from 'commander';
import common from './common';
import './base/console';
import xlsx from 'node-xlsx';
import fs from 'fs';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('jsliang')
  .description('jsliang 帮助指令')
  .action(() => {
    common();
  });

program
  .command('test')
  .description('测试频道')
  .action(async () => {
    // 测试新功能的时候使用
    
    // 以 buffer 形式导入
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/common/dist/Excel 试用文件.xlsx`));
    console.log(JSON.stringify(workSheetsFromBuffer, null, 2));

    // 以文件形式导入
    const workSheetsFromFile = xlsx.parse(`${__dirname}/common/dist/Excel 试用文件.xlsx`);
    console.log(JSON.stringify(workSheetsFromFile, null, 2));
  });

program.parse(process.argv);
```

执行 `npm run test`，控制台打印如下：

```js
---1---
[
  {
    "name": "Sheet1",
    "data": [
      [
        "key",
        "zh-CN",
        "en-US",
        "zh-TW",
        "zh-GZ"
      ],
      [
        "noMoney",
        "我没钱啦！",
        "I have no money",
        "我沒錢啦！",
        "我冇钱啦！"
      ]
    ]
  }
]

---2---
[
  {
    "name": "Sheet1",
    "data": [
      [
        "key",
        "zh-CN",
        "en-US",
        "zh-TW",
        "zh-GZ"
      ],
      [
        "noMoney",
        "我没钱啦！",
        "I have no money",
        "我沒錢啦！",
        "我冇钱啦！"
      ]
    ]
  }
]
```

OK，都能正常导入~

### 测试导出

```js
import program from 'commander';
import common from './common';
import './base/console';
import xlsx from 'node-xlsx';
import fs from 'fs';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('jsliang')
  .description('jsliang 帮助指令')
  .action(() => {
    common();
  });

program
  .command('test')
  .description('测试频道')
  .action(async () => {
    // 测试新功能的时候使用
    
    // 导出数据
    const data = [
      [1, 2, 3],
      [true, false, null, 'sheetjs'],
      ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
      ['baz', null, 'qux'],
    ];
    const buffer = xlsx.build([{name: "mySheetName", data: data}]); // 拿到文件 buffer

    // 写入文件
    fs.writeFileSync(`${__dirname}/common/dist/test-sheet.xlsx`, Buffer.from(buffer));
  });

program.parse(process.argv);
```

执行 `npm run test` 后，目录变成：

![图](./img/Excel-02.png)

打开这个 Excel 文件，可以看到：

![图](./img/Excel-03.png)

### 测试定制宽度

TODO: 继续接入 Node 系列内容

## 参考文献

* [nodejs 实现导出 excel 报表](https://cloud.tencent.com/developer/article/1653844)
* [GitHub：SheetJS](https://github.com/SheetJS/sheetjs)
* [GitHub：node-xlsx](https://github.com/mgcrea/node-xlsx)

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
