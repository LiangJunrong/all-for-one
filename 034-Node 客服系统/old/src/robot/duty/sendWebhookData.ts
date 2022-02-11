import { getFeedbackData, getProductData } from './getWebhookData';
import sendWebhook from '../common/sendWebhook';
import { IPageData } from '../interface';

// 发送数据到产品群
export const sendFeedbackGroup = async (todayData: IPageData) => {
  // 组装数据
  const sendText = await getFeedbackData(todayData);

  // 发送 webhook
  console.log('组装数据，准备发送到用户反馈群');
  const { type, robots, content } = sendText;
  await sendWebhook({ type, robots, content });
};

// 发送数据到产品群
export const sendProductGroup = async (todayData: IPageData, tomorrowData: IPageData) => {
  // 组装数据
  const sendText = await getProductData(todayData, tomorrowData);

  // 发送 webhook
  console.log('组装数据，准备发送到产品群');
  const { type, robots, content } = sendText;
  await sendWebhook({ type, robots, content });
};
