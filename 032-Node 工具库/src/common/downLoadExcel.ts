import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

export const downLoadExcel = async (link: string): Promise<boolean> => {
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: false, // 打开实体浏览器
    devtools: true, // 打开开发模式
  });

  // 1. 创建新标签页并打开
  const page = await browser.newPage();
  await page.goto(link);

  // 2. 睡眠 6.66s - 确保页面正常打开
  await page.waitForTimeout(6666);

  // 3. 触发【更多菜单】按钮的点击
  const moreBtn = await page.$('.header-more-btn');
  moreBtn?.click();

  // 4. 睡眠 1s - 确保按钮点击到
  await page.waitForTimeout(2000);

  // 5. 设置下载路径
  const dist = path.join(__dirname, './dist');
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }
  await (page as any)._client?.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: dist,
  });

  // 6. 触发【下载】按钮的点击
  const elements = await page.$$('.header-menu-item');
  let downloadBtn;
  if (elements.length) {
    downloadBtn = elements[8];
  }
  if (!downloadBtn) {
    console.error('没找到下载按钮');
    await browser.close();
  }
  await downloadBtn?.click();

  // 7. 睡眠 10s - 确保资源下载到
  await page.waitForTimeout(10000);

  // 8. 关闭窗口
  await browser.close();

  return await true;
};