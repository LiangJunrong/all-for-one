
// 初始化项目
import './base';

// 基础：commander.js
import { Command } from 'commander';
const program = new Command();

// 机器人模块
import { runRobot, runFeedback } from './robot';

program
  .version('0.0.1')
  .description('工具库')

program
  .command('robot')
  .description('运行机器人')
  .action(async () => {
    // 查看环境
    switch (process.env.NODE_ENV) {
      case 'production': console.log('开始运行正式环境'); break;
      case 'test': console.log('开始运行测试环境'); break;
      default: break;
    }
    await runRobot();
  });

program
  .command('feedback')
  .description('监听用户反馈')
  .action(async () => {
    await runFeedback();
  });

program.parse(process.argv);
