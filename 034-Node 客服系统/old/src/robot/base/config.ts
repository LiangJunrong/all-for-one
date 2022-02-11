/**
 * @name 存放配置信息
 * @description 根据环境 production 和 test 区分读取的数据
 */

// 我的机器人地址，用来查看信息是否正常发送
const MY_ROBOT = 'https://woa.wps.cn/api/v1/webhook/send?key=e1c889f2da68191b88c35123ede3f394';

// 浏览器 url
export const PAGE_URL = {
  duty: 'https://kdocs.cn/l/cvuh3pYtqObO', // Weboffice 用户反馈值班表
  recording: 'https://kdocs.cn/l/cngSvaQ2z9JZ', // Weboffice 用户反馈记录表
};

// webhook 机器人地址
export const ROBOT_ADDRESS = process.env.NODE_ENV === 'production' ? {
  // 产品群提示
  dutyProduct: [MY_ROBOT, 'https://woa.wps.cn/api/v1/webhook/send?key=dc2bc9e242759087d913ad8ced815d56'],
  
  // 用户反馈群提示
  dutyFeedback: [MY_ROBOT, 'https://woa.wps.cn/api/v1/webhook/send?key=469ae703e5dfe6408fbb80db677724f3', 'https://woa.wps.cn/api/v1/webhook/send?key=c55d69b6230aa21f27e8475ee4c80fba', 'https://woa.wps.cn/api/v1/webhook/send?key=2efc33dc4c1e1edb7c6147c4e133c294'],
  
  // 收录情况
  recording: [MY_ROBOT, 'https://woa.wps.cn/api/v1/webhook/send?key=dc2bc9e242759087d913ad8ced815d56']
} : {
  dutyProduct: [MY_ROBOT, 'https://woa.wps.cn/api/v1/webhook/send?key=14df310b592b246f18c1821bf732a78d'],
  dutyFeedback: [MY_ROBOT, 'https://woa.wps.cn/api/v1/webhook/send?key=e87df05780d2bcb12f70b3f989c4d3c4'],
  recording: [MY_ROBOT, 'https://woa.wps.cn/api/v1/webhook/send?key=33a3806ae10e981c56833c03a375a489'],
};

// DBSheet 值班表配置
export const DUTY_CONFIG = {
  name: 'WebOffice 用户反馈值班表/2022年 UX 值班表',
  dbIndex: 4,                           // 表
  viewIndex: 1,                         // 视图
  timeTitle: '日期',                    // 日期
  staffOnDutyTitle: ['UX1', 'UX2'],     // 值班人员
  ombudsmanTitle: ['监察员'],            // 监察员
};

// Excel 反馈表配置
export const RECORDING_CONFIG = {
  timeTitle: 'A',     // 反馈时间
  questionTitle: 'F', // 问题简述
  component: 'E',     // 组件
  reporter: 'L',      // 录入人
  report: 'H',        // 录入人回复
};
