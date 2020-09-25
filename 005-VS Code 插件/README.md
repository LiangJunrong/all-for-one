jsliang 的插件
===

> Create by **jsliang** on **2020-4-30 15:26:16**  
> Recently revised in **2020-09-26 03:18:47**

听说你在找我？扫描下面二维码加我微信：

![](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-small-wechat.jpeg?raw=true)

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 功能列表](#chapter-three) |
| &emsp;[3.1 snippets 提示](#chapter-three-one) |
| &emsp;[3.2 快捷键](#chapter-three-two) |
| &emsp;[3.3 跳转功能](#chapter-three-three) |
| &emsp;[3.4 Markdown 自动生成目录](#chapter-three-four) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 参考文献](#chapter-four) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)
    
本插件主要是为解决个人写文章或者工作中的一些问题而开发。

* 常用命令 & 网址

1. 安装 `yeoman` 脚手架工具：`npm i yo -g`
2. 安装 VS Code 代码生成器：`npm i generator-code -g`
3. 安装打包工具 `vsce`：`npm i vsce -g`
4. 新建项目：`yo code`
5. 进入开发：`Ctrl/Fn + F5`
6. 打开命令行：`Ctrl/Command + Shift + P`
7. 本地打包：`vsce package`
8. 创建 Microsoft 账号：https://login.live.com/
9. 通过 Microsoft 账号注册 Azure 账号：https://aka.ms/SignupAzureDevOps
10. 线上发布地址：https://marketplace.visualstudio.com/manage

## <a name="chapter-three" id="chapter-three"></a>三 功能列表

> [返回目录](#chapter-one)
    
### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 snippets 提示

> [返回目录](#chapter-one)
    
* `snippets` 提示：

![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/01-html-snippets.gif?raw=true)

> 【生效文件】`snippets 提示`：功能

1. 【html】`!!`：生成 H5 代码模板
2. 【js】`react_template`：生成 React 无状态组件代码模板
3. 【jsx】`react_class`：生成 React 类组件代码模板
4. 【jsx】`import`：生成 `import` 导入代码模板
5. 【md】`template`：生成 **jsliang** 日常文章模板
6. 【md】`leetcode_template`：生成 **jsliang** 刷 LeetCode 每日一题的文章模板
7. 【md】`time`：生成时间注释
8. 【md】`update_time`：生成最新时间
9. 【md】`category`：生成目录模板
10. 【md】`ads`：公众号 + 文档声明
11. 【md】`js`：js 代码块
12. 【md】`html`：html 代码块
13. 【md】`css`：css 代码块

注意：由于 VS Code 默认没有开启 Markdown 的提示，所以不仅仅是这个插件，原本它内置的提示内容，例如 `link` 等都不会出现（很奇怪的点，花了几个钟才解决）。

所以需要通过 `Ctrl/Command + Shift + P`，然后输入 `setting`，找到【首选项：打开工作区设置（JSON）】，然后进行设置：

> 英文版本对应的是 `Preferences: Open Workspace Settings (JSON)`

```json
{
	"[markdown]": {
		"editor.quickSuggestions": {
			"other": true,
			"comments": false,
			"strings": true
		},
	},
}
```

这样它就可以开启 Markdown 的提示了~

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 快捷键

> [返回目录](#chapter-one)
    
![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/02-fnComment.gif?raw=true)

1. `Ctrl/Command + Shift + I`：对函数进行注释。
2. `Ctrl/Command + Shift + J`：格式转换 `text_style -> textStyle -> TextStyle -> TEXT_STYLE -> text-style`（需选中对应文本，再进行转换）。

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 跳转功能

> [返回目录](#chapter-one)
    
![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/03-openFile.gif?raw=true)

在 VS Code 的 JSX 文件中，用户可以通过 `Ctrl/Command + 点击` 跳转到对应的 JS 文件，但是无法跳转到 CSS 文件，对此，**jsliang** 的插件进行了拓展，支持跳转到对应的插件上。

在 JSX 文件中通过 `import ... from ...` 导入的 CSS，通过 `Ctrl/Command + 点击` 跳转到对应文件中。

同时，通过梳理调整，在 `src` 目录下，使用 `Command/Ctrl + 点击`，支持 4 种格式的跳转：

1. `import ... from './../'`    —— 有相对路径
2. `import ... from 'src/...'`  —— 有 `src` 的绝对路径
3. `import ... from 'index'`    —— `js` 文件不添加后缀的（`index.js`）
4. `import ... from 'Table'`    —— `jsx` 文件引用 `jsx` 文件的时候不添加后缀

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 Markdown 自动生成目录

> [返回目录](#chapter-one)
    
![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/04-buildDirectory.gif?raw=true)

在你 Markdown 乱七八糟的目录下，点击右键，选择【生成目录】，那么可以直接生成一个新的目录，而且具备导向功能。

如果你更新了文章内容，添加或者删除了标题，那么再点击【生成目录】，它会帮你更新你的旧目录。

`all is well!`

就跟你用 Word 一键生成目录一样方便！

## <a name="chapter-four" id="chapter-four"></a>四 参考文献

> [返回目录](#chapter-one)
    
在开发 Visio Studio Code 插件的过程中，查阅了很多插件，最让我看得舒适的是小茗同学的系列文章：

* [【博客园】小茗同学《VSCode插件开发全攻略》](https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html)
* [【GitHub】小茗同学《vscode-plugin-demo》](https://github.com/sxei/vscode-plugin-demo)

当然，当中有一些点，因为时间差异，可能 VS Code 对此进行了变更，所以各位小伙伴自行找解决方案了。

* [VS Code 文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

**整体参考文献**：

* 本插件开发文档：[plm-snippet 开发](https://github.com/LiangJunrong/document-library/tree/master/other-library/tool/Visio%20Studio%20Code)
* [【博客园】小茗同学《VSCode插件开发全攻略（一）概览》](https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html)
* [【Visio Studio Code】插件市场](https://marketplace.visualstudio.com/vscode)
* [【Visio Studio Code】插件开发 API](https://code.visualstudio.com/api)

**自动生成目录参考文献**：

* [VSCode插件开发全攻略（二）HelloWord](http://blog.haoji.me/vscode-plugin-hello-world.html)
* [VSCode插件开发全攻略（四）命令、菜单、快捷键](http://blog.haoji.me/vscode-plugin-command-and-menu.html)
* [使用 nodejs 的 readline 模块按行读取文件](https://www.v2ex.com/t/352348)
* [nodejs实践录：按行处理文件数据的示例](https://blog.csdn.net/subfate/article/details/98331655)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。