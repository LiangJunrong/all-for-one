import { PAGE_URL, RECORDING_CONFIG } from '../base/config';
import browserOpen from '../common/browserOpen';
import browserPageLogin from '../common/browserPageLogin';
import getExcelData from './getExcelData';
import getWebhookData from './getWebhookData';
import sendWebhook from '../common/sendWebhook';

export const sendRecordingData = async () => {
  // 步骤一：打开浏览器
  const { browser, page } = await browserOpen();

  // 步骤二：登录界面
  await browserPageLogin(page, PAGE_URL.recording);

  // 步骤三：获取 Excel 数据
  const data = await getExcelData(page, RECORDING_CONFIG);

  // 步骤四：关闭浏览器
  console.log('已获取数据，关闭浏览器');
  await browser.close();

  // 步骤五：整理数据
  const sendText = await getWebhookData(data);

  // 步骤六：发送数据到值班群
  console.log('组装数据，准备发送到用户反馈群');
  const { type, robots, content } = sendText;
  await sendWebhook({ type, robots, content });
};