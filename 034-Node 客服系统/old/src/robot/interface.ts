// DBSheet 配置
export interface IDBSheetConfig {
  dbIndex: number, // 表
  viewIndex: number, // 视图
  timeTitle: string, // 日期
  staffOnDutyTitle: string[], // 值班人员
  ombudsmanTitle: string[], // 监察员
}

export interface IPageOneData {
  name: string,
  id?: string,
}

// 页面数据
export interface IPageData {
  timeInfo: string,
  dutyInfo: IPageOneData[],
  ombudsmanInfo: IPageOneData[],
}

// 发送数据配置
export interface ISendConfig {
  type: string, // 类型
  robots: string[], // 机器人地址
  content: string, // 内容
  mentioned?: number[], // 提醒人 ID 列表
  title?: string, // 标题
  messageUrl?: string, // 卡片地址
  btnTitle?: string, // 按钮文本
};

// Excel 配置
export interface IExcelConfig {
  timeTitle: string, // 反馈时间
  questionTitle: string, // 问题简述
  component: string, // 组件
  reporter: string, // 录入人
  report: string, // 录入人回复
}

export interface IExcelData {
  timeText: string, // 反馈日期
  questionText: string, // 问题简述
  componentText: string, // 组件
  reporterText: string, // 录入人
  reportText: string, // 录入人回复
}