import { IPageData } from '../interface';
import { getTargetDay } from '../../utils/date';

// 获取当天数据
export default async (data: IPageData[]) => {
  let todayData = {} as IPageData;
  let tomorrowData = {} as IPageData;
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const timeList = item.timeInfo.split(' ');
    const today = getTargetDay(2, 0); // 当天
    const tomorrow = getTargetDay(2, 1); // 第二天
    if (today === timeList[0]) {
      todayData = item;
    } else if (tomorrow === timeList[0]) {
      tomorrowData = item;
    }
  }
  return { todayData, tomorrowData };
};