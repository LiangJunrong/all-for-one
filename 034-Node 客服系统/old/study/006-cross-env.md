005-cross-env
===

> Create by **jsliang** on **2022-02-10 14:22:51**  
> Recently revised in **2022-02-10 14:22:51**

* 安装：`npm i cross-env -D`
* 使用：

> package.json

```js
...
"scripts": {
  "jsliang": "cross-env NODE_ENV=production ts-node ./src/index.ts jsliang",
  "jsliang-test": "cross-env NODE_ENV=test ts-node ./src/index.ts jsliang"
},
...
```

> index.ts

```ts
// 查看环境
switch (process.env.NODE_ENV) {
  case 'production': console.log('开始运行正式环境'); break;
  case 'test': console.log('开始运行测试环境'); break;
  default: break;
}
```