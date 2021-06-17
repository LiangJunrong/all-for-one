import program from 'commander';
import common from './common';
import './base/console';
import puppeteer from 'puppeteer';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('jsliang')
  .description('jsliang 帮助指令')
  .action(() => {
    common();
  });

program
  .command('test')
  .description('测试频道')
  .action(async () => {
    // 启动浏览器
    const browser = await puppeteer.launch({
      headless: false, // 打开实体浏览器
    });

    // 创建新标签页并打开
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/s?wd=jsliang');

    // 获取快照并存储到本地
    await page.screenshot({
      path: './src/baidu.png',
    });

    // 关闭窗口
    await browser.close();
  });

program.parse(process.argv);