// 初始化项目
import './base';

// commander 指令
import { Command } from 'commander';
const program = new Command();

// node-schedule 定时器
import schedule from 'node-schedule';
import { getDateDetail } from './utils/date';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('robot')
  .description('尝试 say hello~')
  .action(async () => {
    console.log('你好，已进入程序');
    await schedule.scheduleJob('0 * * * * *', () => {
      const { year, month, day, hour, minute, second } = getDateDetail(new Date());
      console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);
    });
  });

program.parse(process.argv);