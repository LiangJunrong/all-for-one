// 初始化项目
import './base';

// commander 指令
import { Command } from 'commander';
const program = new Command();

// node-schedule 定时器
import schedule from 'node-schedule';

// 通过 Puppeteer，打开无头浏览器
import puppeteer from 'puppeteer';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('robot')
  .description('尝试 say hello~')
  .action(async () => {
    console.log('你好，已进入程序');
    let time = 0;
    await schedule.scheduleJob('0 * * * * *', async () => {
      const browser = process.env.NODE_ENV === 'production' ?
        // 正式环境需要开启沙盒模式
        await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }) :
        // 非正式环境则随意
        await puppeteer.launch({
          headless: false, // 非无头模式,
          devtools: true, // 调试模式，可以在控制台看到 console
        });
      
      // 创建新标签页并打开
      const page = await browser.newPage();
      await page.goto('https://www.baidu.com/s?wd=jsliang');

      // 等待 5 秒加载
      await page.waitForTimeout(5 * 1000);

      // 获取快照并存储到本地
      await page.screenshot({
        path: `./src/source/baidu_${++time}.png`,
      });

      // 关闭窗口
      await browser.close();
    });
  });

program.parse(process.argv);