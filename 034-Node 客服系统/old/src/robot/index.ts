import schedule from 'node-schedule';
import { retryAgain } from '../utils/others';
import { ROBOT_ADDRESS } from './base/config';

// webhook 机器人
import { sendDutyData } from './duty';
import { sendRecordingData } from './recording';

// 应用机器人
import { runExpress } from './application';

// 运行 webhook 机器人
export const runRobot = async () => {
  console.log('机器人配置：', ROBOT_ADDRESS);

  // 根据环境变量区分运行方式
  switch (process.env.NODE_ENV) {

    // 正式环境
    case 'production':
      // 每天 8:55 发送值班表信息
      await schedule.scheduleJob('0 55 8 * * *', async () => {
        await retryAgain(sendDutyData, 10, 10 * 1000);
      });
      // 每天 17:45 和 9:10 发送反馈表信息
      await schedule.scheduleJob('0 45 17 * * *', async () => {
        await retryAgain(sendRecordingData, 10, 10 * 1000);
      });
      await schedule.scheduleJob('0 10 9 * * *', async () => {
        await retryAgain(sendRecordingData, 10, 10 * 1000);
      });
      break;

    // 测试环境
    case 'test':
      retryAgain(sendDutyData, 10, 10 * 1000);
      retryAgain(sendRecordingData, 10, 10 * 1000);
    // 其他
    default: break;
  }
};

// 运行运用机器人
export const runFeedback = async () => {
  // 步骤一：启动 Express
  await runExpress();
};
