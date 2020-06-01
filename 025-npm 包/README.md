025 - npm 包
===

> Create by **jsliang** on **2020-06-01 08:01:51**  
> Recently revised in **2020-6-1 08:22:08**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

自定义实现 npm 包：

* 初始化 `package.json`：`npm init`
* 输入 `index.js`：`console.log('hello world! 初始化 jsliang 的 npm 包');`
* 注册用户：`https://www.npmjs.com/signup`
* 添加用户：`npm adduser`（输入账号密码以及一个邮箱）
* 发布 npm 包：`npm publish`

> 提示：403 Forbidden - PUT https://registry.npmjs.org/jsliang - you must verify your email before publishing a new package: https://www.npmjs.com/email-edit

这时候只需要登录 npm 并进行对应的邮箱设置并再次输入 `npm publish` 即可

> npm publish

```
npm notice 
npm notice package: jsliang@1.0.0
npm notice === Tarball Contents ===
npm notice 264B  package.json
npm notice 58B   index.js
npm notice 2.8kB README.md
npm notice === Tarball Details ===
npm notice name:          jsliang
npm notice version:       1.0.0
npm notice package size:  1.8 kB
npm notice unpacked size: 3.1 kB
npm notice shasum:        5aefadcc6b26ba9c1aa1042c285ebe49397fbf8f
npm notice integrity:     sha512-7ydInjZZYv8bx[...]yWymroltGfyaw==
npm notice total files:   3
npm notice
+ jsliang@1.0.0
```

这样，就发布成功了~

* [发布成功](img/发布成功.png)

---

**不折腾的前端，和咸鱼有什么区别！**

![图](https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/z-index-small.png?raw=true)

**jsliang** 会每天更新一道 LeetCode 题解，从而帮助小伙伴们夯实原生 JS 基础，了解与学习算法与数据结构。

**浪子神剑** 会每天更新面试题，以面试题为驱动来带动大家学习，坚持每天学习与思考，每天进步一点！

扫描上方二维码，关注 **jsliang** 的公众号（左）和 **浪子神剑** 的公众号（右），让我们一起折腾！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。