import program from 'commander';
import common from './common';
import './base/console';
import xlsx from 'node-xlsx';
import fs from 'fs';

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
    // 测试新功能的时候使用
    
    // 导出数据
    const data = [
      ['key', 'zh-CN', 'en-US', 'zh-TW', 'zh-GZ'],
      ['noMoney', '我没钱啦！', 'I have no money', '我沒錢啦！', '我冇钱啦！'],
    ];
    // 列宽设置
    const options = {
      '!cols': [
        { wch: 10 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
      ]
    }
    // 生成 buffer
    const buffer = xlsx.build([{ name: "jsliang", data: data }], options); // 拿到文件 buffer

    // 写入文件
    fs.writeFileSync(`${__dirname}/common/dist/Excel 导出文件.xlsx`, Buffer.from(buffer));
  });

program.parse(process.argv);