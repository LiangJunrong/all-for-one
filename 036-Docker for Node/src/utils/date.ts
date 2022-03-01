/**
 * @name 获取具体日期
 * @param {Date} date 时间
 */
export const getDateDetail = (date: Date) => {
  return {
    year: date.getFullYear(), // 年
    month: date.getMonth() + 1, // 月
    day: date.getDate(), // 日
    hour: date.getHours(), // 时
    minute: date.getMinutes(), // 分
    second: date.getSeconds(), // 秒
    week: date.getDay() === 0 ? 7 : date.getDay(), // 星期
  };
};

/**
 * @name 获取当前周
 * @description 参数不同返回值不同
 * 类型 1（补全 0）：2xxx年01月01日 - 2xxx年12月31日
 * 类型 2（补全 0）：2xxx/01/01 - 2xxx/12/31
 * 类型 3：2xxx/1/1 - 2xxx/12/31
 */
export const getNowWeek = (type = 1): string[] => {
  const dateOfToday = Date.now();
  const dayOfToday = (new Date().getDay() + 7 - 1) % 7;
  const daysOfThisWeek = Array.from(new Array(7)).map((_, i) => {
    const date = new Date(dateOfToday + (i - dayOfToday) * 1000 * 60 * 60 * 24);
    const { year, month, day } = getDateDetail(date);
    let week = '';
    switch (type) {
      case 1: // 「补全 0」2xxx年01月01日 - 2xxx年01月01日
        week = `${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
        break;
      case 2: // 「补全 0」2xxx/01/01 - 2xxx/12/31
        week = `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
        break;
      case 3: // 2xxx/1/1 - 2xxx/12/31
        week = `${year}/${month}/${day}`;
        break;
      default:
        break;
    }
    return week;
  });
  
  return daysOfThisWeek;
};

/**
 * @name 获取指定日期的数据
 * @description 参数不同返回值不同
 * 类型 1（补全 0）：2xxx年01月01日
 * 类型 2（补全 0）：2xxx/01/01
 * 类型 3：2xxx/1/1
 * @param {number} type 类型
 * @param {number} diff 距离今天的时间，为 + 则往后算，为 - 则往前算，例如 2022.02.28，填了 +1 就到 3 月
 */
export const getTargetDay = (type = 1, diff: number): string => {
  const date = new Date();
  const otherDate = new Date(date);
  otherDate.setDate(date.getDate() + diff); // 计算差值
  const { year, month, day } = getDateDetail(otherDate);
  switch (type) {
    case 1: return `${year}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
    case 2: return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
    case 3: return `${year}/${month}/${day}`;
    default: return '';
  }
};
