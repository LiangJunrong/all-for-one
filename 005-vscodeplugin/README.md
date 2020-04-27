005 - VS Code 插件开发
===

本插件主要是为了输入 @api 的时候，能提示自定义的命令：

```js
/**
 * @name 接口名称
 * @description 接口地址
 * @param 接口参数
 * @return 接口返回内容
*/
```

## 一 安装脚手架

* 安装 `yeoman` 脚手架工具：`npm i yo -g`
* 安装 VS Code 代码生成器：`npm i generator-code -g`

## 二 搭建环境

1. 开始干活：`yo code`
2. 你打算开发怎样的插件：`TypeScript`
3. 给你的插件起个名字：`005-vscodeplugin`
4. 你插件的标识：`005-vscodeplugin`
5. 描述一下你的插件：`jsliang 开发的插件`
6. 需要起一个 `git` 仓库吗：`Yes`
7. 你打算使用哪种包管理工具：`npm`
8. 安装中……
9. 打开新目录：`cd ./jsliang`

```
yo code

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? 005-vscodeplugin
? What's the identifier of your extension? 005-vscodeplugin
? What's the description of your extension? jsliang 开发的插件
? Initialize a git repository? Yes
? Which package manager to use? npm

。。。。。。
安装完毕，前往新世界，扬帆起航~

cd ./005-vscodeplugin
```

## 三 运行项目

通过 VS Code 打开新生成的文件夹，按 F5 运行项目（Mac 下 fn + F5）。

在弹出的新窗口，执行：`Command + Shift + P` 或者 `Ctrl + Shift + P` 打开命令行。

* 打印：`Hello World`
* 重载：`Reload Window`

> 重载也可以在新窗口直接通过 `Ctrl+R` 或者 `Command+R` 刷新。

## 四 package.json

> 仅供参考，json 不允许添加注释！

```json
{
  // 插件的名字，全部小写，不能有空格
  "name": "005-vscodeplugin",
  // 插件的友好显示名称，用户显示再应用市场，支持中文
  "displayName": "005-vscodeplugin",
  // 描述
  "description": "jsliang 的 插件",
  // 关键字，用于市场搜索
  "keywords": ["jsliang", "自定义命令"],
  // 发布者，如果要发布到应用市场的话，这个名字必须与发布者一致
  "publisher": "jsliang",
  // 版本号
  "version": "0.0.1",
  // 表示插件最低支持的 VS Code 版本
	"engines": {
		"vscode": "^1.44.0"
  },
  // 插件应用市场分类，可选值：[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]
	"categories": [
		"Other"
  ],
  // 插件图标，至少 128 * 128 像素
  "icon": "images/icon.png",
  // 扩展的激活事件
	"activationEvents": [
		"onCommand:005-vscodeplugin.HelloWorld"
  ],
  // 入口文件
  "main": "./out/extension.js",
  // 贡献点，VS Code 插件大部分功能配置都在这里
	"contributes": {
    // 命令
		"commands": [
			{
				"command": "005-vscodeplugin.HelloWorld",
				"title": "Hello World"
			}
    ],
    // 快捷键绑定
    "keybindings": [
			{
				"command": "005-vscodeplugin.HelloWorld",
				"key": "ctrl+shift+i",
				"mac": "cmd+shift+i",
				"when": "editorTextFocus"
			}
    ],
    // 设置菜单
		"menus": {
      // 编辑器右键菜单
			"editor/context": [
				{
          // 表示只有编辑器具有焦点时才会在菜单中出现
					"when": "editorFocus",
          "command": "005-vscodeplugin.HelloWorld",
          // navigation 是一个永远置顶的分组，后面的 @6 是人工进行组内排序
					"group": "navigation"
        },
        {
          // 只有编辑器具有焦点，并且打开的是 JS 文件才会出现
          "when": "editorFocus && resourceLangId == javascript",
          "command": "extension.demo.testMenuShow",
          "group": "z_commands"
        }
      ],
      // 编辑器右上角图标，不配置图片就显示文字
      "editor/title": [
        {
          "when": "editorFocus && resourceLangId == javascript",
          "command": "extension.demo.testMenuShow",
          "group": "navigation"
        }
      ],
			// 编辑器标题右键菜单
      "editor/title/context": [
        {
          "when": "resourceLangId == javascript",
          "command": "extension.demo.testMenuShow",
          "group": "navigation"
        }
      ],
			// 资源管理器右键菜单
      "explorer/context": [
        {
          "command": "extension.demo.getCurrentFilePath",
          "group": "navigation"
        },
        {
          "command": "extension.demo.openWebview",
          "group": "navigation"
        }
      ]
    },
    // 代码片段
    "snippets": [
      {
        "language": "javascript",
        "path": "./snippets/javascript.json"
      },
      {
        "language": "html",
        "path": "./snippets/html.json"
      }
    ],
    // 自定义新的 activitybar 图标，也就是左侧侧边栏大的图标
    "viewsContainers": {
      "activitybar": [
        {
          "id": "beautifulGirl",
          "title": "美女",
          "icon": "images/beautifulGirl.svg"
        }
      ]
    },
		// 自定义侧边栏内 view 的实现
    "views": {
			// 和 viewsContainers 的id对应
      "beautifulGirl": [
        {
          "id": "beautifulGirl1",
          "name": "国内美女"
        },
        {
          "id": "beautifulGirl2",
          "name": "国外美女"
        },
        {
          "id": "beautifulGirl3",
          "name": "人妖"
        }
      ]
    },
		// 图标主题
    "iconThemes": [
      {
        "id": "testIconTheme",
        "label": "测试图标主题",
        "path": "./theme/icon-theme.json"
      }
    ]
  },
  // 同 npm scripts
	"scripts": {
		"vscode:prepublish": "npm run compile",
		"compile": "tsc -p ./",
		"lint": "eslint src --ext ts",
		"watch": "tsc -watch -p ./",
		"pretest": "npm run compile && npm run lint",
		"test": "node ./out/test/runTest.js"
  },
  // 开发依赖
	"devDependencies": {
		"@types/vscode": "^1.44.0",
		"@types/glob": "^7.1.1",
		"@types/mocha": "^7.0.2",
		"@types/node": "^13.11.0",
		"eslint": "^6.8.0",
		"@typescript-eslint/parser": "^2.26.0",
		"@typescript-eslint/eslint-plugin": "^2.26.0",
		"glob": "^7.1.6",
		"mocha": "^7.1.1",
		"typescript": "^3.8.3",
		"vscode-test": "^1.3.0"
  },
  // 后面这几个应该不用介绍了
  "license": "SEE LICENSE IN LICENSE.txt",
  "bugs": {
    "url": "https://github.com/sxei/vscode-plugin-demo/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/sxei/vscode-plugin-demo"
  },
	// 主页
  "homepage": "https://github.com/sxei/vscode-plugin-demo/blob/master/README.md"
}
```

## 五 extension.ts

```js
// 模块（module） 'vscode' 包含了 VS Code 的可拓展性 API
// 导入这个模块并在下面代码中使用别名 vscode 来引用它
import * as vscode from 'vscode';

// 这个方法在激活扩展的时候调用
// 你的扩展在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {

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

// 当你的拓展被停用时会调用这个钩子
export function deactivate() {}

```

## 六 实现代码提示功能

> package.json

```js
// ……省略
"contributes": {
  "snippets": [
    {
      "language": "javascript",
      "path": "./snippets/javascript.json"
    }
  ],
}
// ……省略
```

> snippets/javascript.json

* scope：文件类型
* prefix：啥时候出现这个代码片段
* body：这个代码片段内容
* description：这个代码片段的描述

```json
{
  "@api": {
		"prefix": "@api",
		"body": [
			"/**",
			"* @name 接口名字",
      "* @tutorial 接口地址",
      "* @param 接口参数",
      "* @return 接口返回",
			"*/"
		],
		"description": "PLM 接口文档注释"
	}
}
```

## 七 打包

不管是本地打包还是发布到应用市场都需要 `vsce` 这个工具：

* 安装 `vsce`：`npm i vsce -g`
* 本地打包：`vsce package`

这时候会有个过程：

```
Executing prepublish script 'npm run vscode:prepublish'...

> 005-vscodeplugin@0.0.1 vscode:prepublish /Users/si-gz-1738/个人/all-for-one/005-VSCodePlugin
> npm run compile


> 005-vscodeplugin@0.0.1 compile /Users/si-gz-1738/个人/all-for-one/005-VSCodePlugin
> tsc -p ./

 WARNING  A 'repository' field is missing from the 'package.json' manifest file.
Do you want to continue? [y/N] y
 DONE  Packaged: /Users/si-gz-1738/个人/all-for-one/005-VSCodePlugin/005-vscodeplugin-0.0.1.vsix (8 files, 111.39KB)
```

如上所示，输入 y 后，会在当前项目上直接输出 `.vsix` 文件。

到插件处，通过 `vsix` 方式安装插件即可。

## 八 发布



## N 参考文献

* [【博客园】小茗同学《VSCode插件开发全攻略（一）概览》](https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html)
* [【Visio Studio Code】插件市场](https://marketplace.visualstudio.com/vscode)
* [【Visio Studio Code】插件开发 API](https://code.visualstudio.com/api)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。