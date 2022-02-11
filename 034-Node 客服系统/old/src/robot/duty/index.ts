import { PAGE_URL, DUTY_CONFIG } from '../base/config';
import browserOpen from '../common/browserOpen';
import browserPageLogin from '../common/browserPageLogin';
import getDBSheetData from './getDBSheetData';
import getTargetData from './getTargetData';
import { sendProductGroup, sendFeedbackGroup } from './sendWebhookData';

export const sendDutyData = async () => {
  // 步骤一：打开浏览器
  const { browser, page } = await browserOpen();

  // 步骤二：登录界面
  await browserPageLogin(page, PAGE_URL.duty);

  // 步骤三：获取 DBSheet 数据
  const data = await getDBSheetData(page, DUTY_CONFIG);

  // 步骤四：关闭浏览器
  console.log('已获取数据，关闭浏览器');
  await browser.close();

  // 步骤五：获取当天和第二天数据
  const { todayData, tomorrowData } = await getTargetData(data);

  // 步骤六：发送数据到产品群
  await sendProductGroup(todayData, tomorrowData);

  // 步骤七：发送数据到用户反馈群
  await sendFeedbackGroup(todayData);
};