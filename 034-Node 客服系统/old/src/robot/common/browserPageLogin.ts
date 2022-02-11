/**
 * @name 登录界面
 * @description 通过 Puppeteer 的 page 和需要打开的 url，登录需要获取数据的页面
 */
export default async (page: any, url: string) => {
  console.log(`登录页面: ${url}`);

  // 打开页面
  await page.goto(url);

  // 睡眠 5s 等待加载页面
  await page.waitForTimeout(6 * 1000);

  /* 登录过程 - 开始 */
  const unLoginBtn = await page.$('.btn-allow');
  unLoginBtn?.click();

  await page.waitForTimeout(6 * 1000);

  const firstLoginBtn = await page.$('.el-button');
  firstLoginBtn?.click();

  await page.waitForTimeout(6 * 1000);

  const navTabMain = await page.$('.nav_tab_main');
  navTabMain?.click();

  await page.waitForTimeout(1 * 1000);

  const moreBtn = await page.$('.more');
  moreBtn?.click();

  await page.waitForTimeout(2 * 1000);

  const okBtn = await page.$('.dialog-footer-ok');
  okBtn?.click();

  await page.waitForTimeout(2 * 1000);

  const loginTypeBtn = await page.$('.tpItem_account');
  loginTypeBtn?.click();

  await page.waitForTimeout(2 * 1000);

  const accountInput = await page.$('#email');
  accountInput?.type('18814121872');

  await page.waitForTimeout(1 * 1000);

  const passwordInput = await page.$('#password');
  passwordInput?.type('19950301x.');

  await page.waitForTimeout(1 * 1000);

  const verifyBtn = await page.$('#rectMask');
  verifyBtn?.click();

  await page.waitForTimeout(6 * 1000);

  const loginBtn = await page.$('#login');
  loginBtn?.click();

  await page.waitForTimeout(8 * 1000);

  // 尝试刷新页面
  await page.goto(url);
  await page.goBack();
  await page.goForward();
  
  await page.waitForTimeout(15 * 1000);
  /* 登录过程 - 结束 */
};