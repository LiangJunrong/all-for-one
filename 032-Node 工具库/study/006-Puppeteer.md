006 - Puppeteer
===

> Create by **jsliang** on **2021-06-16 22:15:56**  
> Recently revised in **2021-06-16 22:15:56**

在前面的 5 篇文章打底下，咱们应该接入点接地气的业务了。

前端多语言不知道小伙伴们有没有接触过，这一次 **jsliang** 将把真实的项目中对于多语言的处理（对，仅是处理而不是讲解多语言怎么配置）脱敏后拿出来分享下。

> 该分享所用的数据仅为参考真实项目而虚构，毕竟这只是【工具库】而不是要打造支持多语言的项目，但是这套工具修改下还是能用到其他地方的，具备参考价值

本篇文章我们将讲解如何使用 Puppeteer 控制 Chrome/Chromium。

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。

就跟它在 GitHub 简介中介绍的一样：你在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！

* 抓取页面快照
* 生成页面 PDF
* 自动操作页面 DOM
* ……

详细例子小伙伴可以翻看本文下方参考文献的 GitHub 或者中文文档，这里不一一举例（免得被吐槽复制 README.md）

## Puppeteer

* 安装：

安装的时候报错：

* `(node:7584) ExperimentalWarning: The fs.promises API is experimental`

我的 Node.js 版本是 `node@10.16.0` 所以需要升级 Node.js。

注意这里有 2 种方法升级，一种是下载最新版覆盖安装，另一种是通过 `nvm/nvmw` 方式去管理。

**jsliang** 网络还不错，直接下载个最新文档版吧：[]()

TODO: 明天继续！

### 抓取快照

我们简单拿抓取页面快照举例：

> src/index.ts

```js

```

## 参考文献

* [Github: Puppeteer](https://github.com/puppeteer/puppeteer)
* [Puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/)
* [puppeteer 前端利器](https://www.cnblogs.com/mingme/p/14013325.html)
* [Puppeteer 之爬虫入门](https://blog.fundebug.com/2017/11/01/guide-to-automating-scraping-the-web-with-js/)

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
