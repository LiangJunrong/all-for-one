003-Puppeteer
===

> Create by **jsliang** on **2022-02-08 11:00:00**  
> Recently revised in **2022-02-08 11:00:00**

* 安装：`npm i puppeteer`
* 常用：

```js
/**
 * @name 打开浏览器
 * @description 通过 Puppeteer，打开无头浏览器，并返回 browser 和 page
 */
import puppeteer from 'puppeteer';

export default async (): Promise<any> => {
  console.log('打开浏览器');

  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: false, // 非无头模式,
    devtools: true, // 调试模式，可以在控制台看到 console
  });

  // 定时 5min 自动关闭
  setTimeout(async () => {
    await browser.close();
  }, 5 * 60 * 1000);

  // 新建并打开页面
  const page = await browser.newPage();

  // 返回信息
  return {
    browser, // 浏览器
    page, // 页面
  };
};
```

```js
/**
 * @name 登录界面
 * @description 通过 Puppeteer 的 page 和需要打开的 url，登录需要获取数据的页面
 */
export default async (page: any, url: string) => {
  console.log('登录页面: ', url);

  // 打开页面
  await page.goto(url);

  // 睡眠 5s 等待加载页面
  await page.waitForTimeout(6000);

  /* 登录过程 - 开始 */
  const unLoginBtn = await page.$('.btn-allow');
  unLoginBtn?.click();

  await page.waitForTimeout(6000);

  const firstLoginBtn = await page.$('.el-button');
  firstLoginBtn?.click();

  await page.waitForTimeout(6000);

  const navTabMain = await page.$('.nav_tab_main');
  navTabMain?.click();

  await page.waitForTimeout(1000);

  const moreBtn = await page.$('.more');
  moreBtn?.click();

  await page.waitForTimeout(2000);

  const okBtn = await page.$('.dialog-footer-ok');
  okBtn?.click();

  await page.waitForTimeout(2000);

  const loginTypeBtn = await page.$('.tpItem_account');
  loginTypeBtn?.click();

  await page.waitForTimeout(2000);

  const accountInput = await page.$('#email');
  accountInput?.type('账号');

  await page.waitForTimeout(1000);

  const passwordInput = await page.$('#password');
  passwordInput?.type('密码');

  await page.waitForTimeout(1000);

  const verifyBtn = await page.$('#rectMask');
  verifyBtn?.click();

  await page.waitForTimeout(6000);

  const loginBtn = await page.$('#login');
  loginBtn?.click();

  await page.waitForTimeout(8000);

  // 尝试刷新页面
  await page.goto(url);
  await page.goBack();
  await page.goForward();
  
  await page.waitForTimeout(10000);
  /* 登录过程 - 结束 */
};
```

## 报错：UnhandledPromiseRejectionWarning: Error: Evaluation failed: ReferenceError: __awaiter is not defined

代码如下：

```js
await page.evaluate(async function() {
  // code to execute on the page
})
```

报错如下：

```
Error: Evaluation failed: ReferenceError: __awaiter is not defined
```

这个报错的修复方式可以查看：[Puppeteer Evaluation failed: ReferenceError: __awaiter is not defined](https://www.claritician.com/puppeteer-evaluation-failed-referenceerror-awaiter-is-not-defined)

大概意思是：

* 这是 TypeScript 将你的代码转换成旧版本的 JavaScript 时出的错，例如 `async` 就会转换成使用 `__awaiter` 的
* 但是，Puppeteer 中，将 `page.evaluate` 转换成 `string` 并且尝试在浏览器运行
* 所以，你需要将这个块，不要转 `ES5`，而是用最新的 Chrome 特性，即 `ES2017`

修改方式：

> tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    ...
  }
}
```