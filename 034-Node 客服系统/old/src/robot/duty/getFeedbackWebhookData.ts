import { ISendConfig, IPageData } from '../interface';
import { ROBOT_ADDRESS } from '../base/config';

// 获取发送文本
export default async (todayData: IPageData): Promise<ISendConfig> => {
  const type = 'markdown';
  const robots = ROBOT_ADDRESS.dutyProduct;
  const todayDuty = todayData.dutyInfo.filter(i => i.name).map(i => `<at user_id="${i.id}">${i.name}</at>`).join('、');
  const content = `
📅 ${todayData.timeInfo}\n\n
⏰ 值班人员：${todayDuty}\n\n
📌 请值班同学关注 & 处理用户反馈
  `;
  return { type, robots, content };
};