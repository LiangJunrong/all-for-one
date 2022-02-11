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