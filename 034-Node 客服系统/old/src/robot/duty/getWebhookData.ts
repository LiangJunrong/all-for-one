import { ISendConfig, IPageData } from '../interface';
import { ROBOT_ADDRESS } from '../base/config';

// 获取发送到产品群的文本
export const getProductData = async (todayData: IPageData, tomorrowData: IPageData): Promise<ISendConfig> => {
  const type = 'markdown';
  const robots = ROBOT_ADDRESS.dutyProduct;
  const todayDuty = todayData.dutyInfo.filter(i => i.name).map(i => `<at user_id="${i.id}">${i.name}</at>`).join('、');
  const todayOmbudsman = todayData.ombudsmanInfo.filter(i => i.name).map(i => `<at user_id="${i.id}">${i.name}</at>`).join('、');
  const tomorrowDuty = tomorrowData.dutyInfo.filter(i => i.name).map(i => `<at user_id="${i.id}">${i.name}</at>`).join('、');
  const tomorrowOmbudsman = tomorrowData.ombudsmanInfo.filter(i => i.name).map(i => `<at user_id="${i.id}">${i.name}</at>`).join('、');
  const content = `
📅 ${todayData.timeInfo}\n\n
⏰ 值班人员：${todayDuty}\n\n

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;监察人员：${todayOmbudsman}\n\n
📌 请值班同学关注 & 处理用户反馈\n\n
\n\n
🌈 温馨提示：明天值班人员 ${tomorrowDuty}，监察人员 ${tomorrowOmbudsman}\n\n
\n\n

*&nbsp;&nbsp;&nbsp;&nbsp;[更多值班信息](https://kdocs.cn/l/cvuh3pYtqObO)
  `;
  return { type, robots, content };
};

// 获取发送到反馈群的文本
export const getFeedbackData = async (todayData: IPageData): Promise<ISendConfig> => {
  const type = 'markdown';
  const robots = ROBOT_ADDRESS.dutyFeedback;
  const todayDuty = todayData.dutyInfo.filter(i => i.name).map(i => `<at user_id="${i.id}">${i.name}</at>`).join('、');
  const content = `
📅 ${todayData.timeInfo}\n\n
⏰ 值班人员：${todayDuty}\n\n
📌 请值班同学关注 & 处理用户反馈
  `;
  return { type, robots, content };
};