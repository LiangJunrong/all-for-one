jsliang 的插件
===

> Create by **jsliang** on **2020-4-30 15:26:16**  
> Recently revised in **2020-05-11 11:10:31**

听说你在找我？扫描下面二维码加我微信：

![](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-small-wechat.jpeg?raw=true)

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 功能列表](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 参考文献](#chapter-four) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

在开发 Visio Studio Code 插件的过程中，查阅了很多插件，最让我看得舒适的是小茗同学的系列文章：

* [【博客园】小茗同学《VSCode插件开发全攻略》](https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html)
* [【GitHub】小茗同学《vscode-plugin-demo》](https://github.com/sxei/vscode-plugin-demo)

当然，当中有一些点，因为时间差异，可能 VS Code 对此进行了变更，所以各位小伙伴自行找解决方案了。

本插件主要是为解决个人工作的一些问题而开发。

* 常用命令&网址

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

* [x] 输入 `@fnComments` 出现 `snippets` 代码提示（用于常用代码配置）
* [x] 输入 `!!` 快速生成 H5 常用文件代码
* [x] 在功能函数或者接口函数中使用快捷键 `Ctrl/Command + Shift + I` 在 JS/JSX 文件中快速注释
* [x] 在 JSX 文件中通过 `import ... from ...` 导入的 CSS，支持通过 `Ctrl/Command + 点击` 跳转到对应文件中。
* [x] 在 JSX 文件中通过 `import ... from 'src/...'` 形式导入的内容，支持 `Ctrl/Command + 点击` 跳转到对应文件中。（注意，是项目根路径下存在 `src` 文件夹）
* [x] Markdown 模板自动生成，通过 `template`、`time`、`category`、`ads` 这四个关键字生成模板，详细开启看 3.6 章节的讲解。
* [x] 在任何文件中选中特定格式的单词，通过 `Ctrl/Command + Shift + J` 命令将其按照 `text_style -> textStyle -> TextStyle -> TEXT_STYLE -> text-style` 的顺序进行变更。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 代码：@fnComments

> [返回目录](#chapter-one)

在 JS 文件输入 `@fnComments` 插入 `snippets` 代码片段：

![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/01-fn-snippets.gif?raw=true)

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 代码：!!

> [返回目录](#chapter-one)

在 HTML 文件输入 `!!` 插入 `snippets` 代码片段：

![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/02-html-snippets.gif?raw=true)

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 快捷键：Ctrl/Command + Shift + I

> [返回目录](#chapter-one)

当光标聚集于方法体的时候，使用快捷键 `Command/Ctrl + Shift + I`，会给该方法添加注释：

![](https://github.com/LiangJunrong/all-for-one/blob/master/005-VS%20Code%20%E6%8F%92%E4%BB%B6/images/03-fnComment.gif?raw=true)

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 自定义跳转

> [返回目录](#chapter-one)

在 VS Code JSX 文件中，用户可以通过 `Ctrl/Command + 点击` 跳转到对应的 JS 文件，但是无法跳转到 CSS 文件，对此，**jsliang** 的插件进行了拓展，支持跳转到对应的插件上。

在 JSX 文件中通过 `import ... from ...` 导入的 CSS，通过 `Ctrl/Command + 点击` 跳转到对应文件中。

同时，通过梳理调整，在 `src` 目录下，使用 `Command/Ctrl + 点击`，支持 4 种格式的跳转：

1. `import ... from './../'`    —— 有相对路径
2. `import ... from 'src/...'`  —— 有 `src` 的绝对路径
3. `import ... from 'index'`    —— `js` 文件不添加后缀的（`index.js`）
4. `import ... from 'Table'`    —— `jsx` 文件引用 `jsx` 文件的时候不添加后缀

图：暂无

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 变量类型转换：Ctrl/Command + Shift + J

> [返回目录](#chapter-one)

添加了变量类型转换功能，选中文本，通过快捷键 `Command/Ctrl + Shift + J`，可以快速转换变量类型。

转换顺序为：`text_style -> textStyle -> TextStyle -> TEXT_STYLE -> text-style`

支持 5 种格式的互相转换。

图：暂无

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 Markdown 模板自动生成

> [返回目录](#chapter-one)

在 Markdown 的 `.md` 后缀文件中，通过以下快捷键能快速搭建文档：

* `template`：jsliang 的文章模板
* `time`：jsliang 的时间注释
* `category`：jsliang 的目录生成
* `ads`：jsliang 的广告 + 文档声明

注意：由于 VS Code 默认每页开启 Markdown 的提示，所以不仅仅是这个插件，原本它内置的提示内容，例如 `link` 等都不会出现（很奇怪的点，花了几个钟才解决）。

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

图：暂无

## <a name="chapter-four" id="chapter-four"></a>四 参考文献

> [返回目录](#chapter-one)

* 本插件开发文档：[plm-snippet 开发](https://github.com/LiangJunrong/document-library/tree/master/other-library/tool/Visio%20Studio%20Code)
* [【博客园】小茗同学《VSCode插件开发全攻略（一）概览》](https://www.cnblogs.com/liuxianan/p/vscode-plugin-overview.html)
* [【Visio Studio Code】插件市场](https://marketplace.visualstudio.com/vscode)
* [【Visio Studio Code】插件开发 API](https://code.visualstudio.com/api)

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。