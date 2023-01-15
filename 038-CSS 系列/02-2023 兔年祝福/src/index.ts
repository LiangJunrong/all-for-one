import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import xlsx from 'node-xlsx';
import shell from 'shelljs';

// 步骤一：下载 Excel
const downloadExcel = async() => {
  // 1. 启动无头浏览器
  console.log('Hello 2023~');
  const browser = await puppeteer.launch({
    // 是否打开实体浏览器
    headless: false,
    // 打开开发模式
    devtools: true,
  });

  // 2. 操作浏览器打开 `https://kdocs.cn/l/cbmawranzvNL`
  const page = await browser.newPage();
  await page.goto('https://kdocs.cn/l/cbmawranzvNL');

  // 3. 睡眠 6.66s（确保浏览器打开链接并加载页面）
  await page.waitForTimeout(6666);

  // 4. 触发【更多菜单】按钮的点击
  // @ts-ignore
  const moreBtn = await page.$('.header-more-btn');
  moreBtn?.click();

  // 5. 睡眠 2s（确保更多菜单按钮点击到）
  await page.waitForTimeout(2000);

  // 6. 设置下载路径（确保 Puppeteer 下载路径，避免【另存为】弹窗后不好处理）
  const dist = path.join(__dirname, './dist');
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }
  // 如果报错，请修改 Puppeteer 为 14.3.0：https://github.com/berstend/puppeteer-extra/issues/651
  await (page as any)._client?.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: dist,
  });

  // 7. 触发【下载】按钮的点击
  // @ts-ignore
  const downloadBtn = await page.$('div[data-key=Download]');
  downloadBtn?.click();

  // 8. 睡眠 6.66s（确保资源下载到）
  await page.waitForTimeout(6666);

  // 9. 关闭窗口
  await browser.close();
}

// 步骤二：读取 Excel 并存储 JSON 数据
const readExcel = async() => {
  // 1. 以 buffer 形式导入数据
  const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/dist/「新春贺词 - 兔飞猛进」.xlsx`));
  // 含图片等数据的时候，第 1 条才是文本数据
  const stringifyData: any = JSON.parse(JSON.stringify(workSheetsFromBuffer, null, 2));
  const data = stringifyData[0]?.data;

  // 2. 读取有效的数据（前面几行为说明数据，且后面需要判断数据是否冗余）
  const result = [];
  for (let i = 3; i < data.length; i++) {
    const item = data[i];
    const [
      username,
      tipsInfo = '点击 ❤ 查看我给你的信',
      letterContentTitle = 'A Letter for you',
      letterContentMain,
      letterContentButton = 'Love ❤ you',
    ] = item;
    // 如果没数据了，则不填写
    if (!username || !letterContentMain) {
      continue;
    }
    result.push({
      username,
      tipsInfo,
      letterContentTitle,
      letterContentMain,
      letterContentButton,
    });
  }

  // 3. 将数据以 JSON 的形式存储到 GitHub Page 仓库
  const GPCatalog = path.join(process.cwd(), './LiangJunrong.github.io/data.json');
  fs.writeFileSync(GPCatalog, JSON.stringify(result));
};

// 步骤三：上传代码到 GitHub Page
const uploadCode = async() => {
  // 1. 前往 GitHub Page 仓库
  const GPCatalog = path.join(process.cwd(), './LiangJunrong.github.io');
  await shell.exec(`cd ${GPCatalog}`);

  // 2. 执行修改命令
  await shell.exec(`git add .`);
  await shell.exec(`git commit -m "fix: 更新线上数据"`);

  // 3. 推送到线上仓库
  await shell.exec('git push');
};

// 步骤四：设置定时器，定时上传代码


const program = require('commander');
program
  .version('1.0.0')
  .description('2023 兔年祝福')
  .command('2023')
  .action(async() => {
    // 步骤一：下载 Excel
    // await downloadExcel();

    // 步骤二：读取 Excel 并存储 JSON 数据
    await readExcel();

    // 步骤三：上传代码到 GitHub Page
    await uploadCode();

    // 步骤四：设置定时器，定时上传代码

  });

program.parse(process.argv);