import axios from 'axios';
import { ISendConfig } from '../interface';

const _tips = (result: any) => {
  console.log(`请求结果：${result.status}`, result.data);
}

const _sendWebhook = async (robots: any[], sendParam: any) => {
  let result = {} as any;
  for (let i = 0; i < robots.length; i++) {
    result = await axios.post(robots[i], sendParam);
  }
  _tips(result);
};

interface ISendTextConfig {
  robots: string[], // 机器人地址
  content: string, // 内容
  mentioned: number[], // 提醒人 ID 列表
};

// 发送文本信息
const _sendTextInfo = async (sendTextConfig: ISendTextConfig) => {
  const { robots, content, mentioned } = sendTextConfig;
  _sendWebhook(robots, {
    msgtype: 'text',
    text: {
      content,
      mentioned,
    }
  });
};

interface ISendMarkdownConfig {
  robots: string[], // 机器人地址
  content: string, // 内容
}

// 发送 Markdown 信息
const _sendMarkdownInfo = async (sendMarkdownConfig: ISendMarkdownConfig) => {
  const { robots, content } = sendMarkdownConfig;
  _sendWebhook(robots, {
    msgtype: 'markdown',
    markdown: {
      text: content,
    },
  });
};

interface ISendCardConfg {
  robots: string[], // 机器人地址
  title: string, // 标题
  content: string, // 内容
  messageUrl: string, // 卡片地址
  btnTitle: string, // 按钮文本
}

// 发送 卡片 信息
const _sendCardInfo = async (sendCardConfig: ISendCardConfg) => {
  const { robots, title, content, messageUrl, btnTitle } = sendCardConfig;
  _sendWebhook(robots, {
    msgtype: 'link', // 机器人地址
    link: {
      title, // 标题
      text: content, // 内容
      messageUrl, // 卡片地址
      btnTitle, // 按钮文本
    },
  });
};

// 发送 webhook 信息
export default async (sendConfig: ISendConfig) => {
  const { type, robots, content, mentioned = [], title = '', messageUrl = '', btnTitle = '' } = sendConfig;
  switch (type) {
    case 'text': await _sendTextInfo({ robots, content, mentioned }); break;
    case 'markdown': await _sendMarkdownInfo({ robots, content }); break;
    case 'card': await _sendCardInfo({ robots, title, content, messageUrl, btnTitle }); break;
    default: break;
  }
};
