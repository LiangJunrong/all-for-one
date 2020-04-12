const data = [];
// 生成小写英文随机数。ASCII 小写英文（a-z）：97-122
const getEnglishRandom = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1)) + lower;
// 生成随机长度小写随机英文
const randerLengthEnglish = (length) => Array.from(Array(length), () => String.fromCharCode(getEnglistRandom(97, 122))).join('');
// 生成随机数据
const getData = (length) => {
  for (let i = 0; i < length; i++) {
    data.push({
      id: i,
      name: randerLengthEnglish(6),
      singer: randerLengthEnglish(4),
    })
  }
}
getData(10);