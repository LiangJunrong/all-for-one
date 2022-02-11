import { ISendConfig, IExcelData } from '../interface';
import { ROBOT_ADDRESS } from '../base/config';
import { getTargetDay } from '../../utils/date';

const _getIdByReporter = (reporter: string): number => {
  switch (reporter) {
    case '霍秋桦': return 370312880;
    case '何雾煌': return 220174021;
    case '康忠泽': return 380929450;
    case '颜宇君': return 1144903772;
    case '詹映龙': return 7057189;
    case '刘欢': return 191251434;
    case '王—帆': return 203467766;
    case '陆远超': return 226011619;
    case '付冬晴': return 201603784;
    case '李石': return 192150486;
    case '黄紫云': return 1149264157;
    case '陈旭': return 6986397;
    case '许艺茂': return 420514704;
    default: return 0;
  }
};

// 获取发送到产品群的文本
export default async (data: IExcelData[]): Promise<ISendConfig> => {
  const type = 'markdown'; // 类型
  const robots = ROBOT_ADDRESS.recording; // 机器人地址
  const feedback: any = {}; // 反馈内容
  const timeList = new Set();
  for (let i = 0; i < data.length; i++) {
    if (feedback[data[i].componentText]) {
      feedback[data[i].componentText].push(data[i].questionText);
    } else {
      feedback[data[i].componentText] = [data[i].questionText];
    }
    timeList.add(data[i].timeText);
  }
  const feedbackKeys = Object.keys(feedback);
  
  const today = getTargetDay(3, 0); // 当天
  const content = data.length ? `
**反馈时间**：${[...timeList].join('、')}\n\n

**反馈问题**：\n\n
${feedbackKeys.map(item1 => `${item1}问题反馈：\n\n
${feedback[item1].map((item2: string, index2: number) => `${item2 ? `${index2 + 1}. ${item2}` : `${index2 + 1}. 问题简述为空`}\n\n`).join('')}\n\n
`).join('')}

**问题回复**：未有回复\n\n

**请值班产品跟进**：${[...new Set(data.map(i => i.reporterText))].map(i => `<at user_id="${_getIdByReporter(i)}">${i}</at>`).join('')}\n\n

**[用户反馈录入表](https://www.kdocs.cn/l/cngSvaQ2z9JZ)**\n\n
  `: `
📅 ${today} 无待跟进问题\n\n
📑 更多内容请关注：[用户反馈录入表](https://www.kdocs.cn/l/cngSvaQ2z9JZ)  
`;
  return { type, robots, content };
};