/**
* @name getHundred
* @description 获取 0-999 的英文
*/
const getHundred = (str) => {
  // 不懂英文的先哭倒在厕所
  const twenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
  const hundred = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const num = Number(str);

  let result = '';
  if (num > 0 && num <= 20) {
    result = twenty[num];
  } else if (num > 20 && num < 100) {
    result = `${hundred[Math.floor(num / 10)]} ${twenty[num % 10]}`;
  } else if (num >= 100) {
    result += `${twenty[Math.floor(num / 100)]} Hundred`;
    const temp = getHundred(num % 100);
    if (temp) {
      result += ` ${temp}`;
    }
  }
  return result.trim();
};

/**
* @name numberToWords
* @description 主入口
*/
const numberToWords = (num) => {
  // 化身字符串
  num = String(num);

  // 不懂英文的先哭倒在厕所
  const billion = ['', 'Thousand', 'Million', 'Billion'];

  // 按照 千 百万 亿 划分
  let splitStr = [];
  let temp = '';
  for (let i = num.length - 1; i >= 0; i--) {
    temp = num[i] + temp;
    if (temp && (temp.length % 3 === 0 || i === 0)) {
      splitStr.push(temp);
      temp = '';
    }
  }
  
  // 设置最终结果
  let result = '';
  for (let i = 0; i < splitStr.length; i++) {
    // 如果返回的结果不是 '' 空字符串
    // '' 字符串代表 0，除了一开始给的 Number 就是 0
    // 否则我们不需要表示 'Zero'
    if (getHundred(splitStr[i])) {
      result = `${getHundred(splitStr[i])} ${billion[i]} ${result}`;
    }
  }
  // 如果最终是空串，那么它就是 0
  return result.trim() || 'Zero';
};

console.log(numberToWords(111));