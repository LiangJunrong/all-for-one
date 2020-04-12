const data = [];
// 生成年龄随机数
const getAgeRandom = () => Math.floor(Math.random() * 100);
// 生成小写英文随机数。ASCII 小写英文（a-z）：97-122
const getEnglistRandom = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1)) + lower;
// 生成随机数据
const getData = (length) => {
  for (let i = 0; i < length; i++) {
    data.push({
      id: i,
      name: i + '-' + Array.from(Array(4), () => String.fromCharCode(getEnglistRandom(97, 122))).join(''),
      age: getAgeRandom(),
      gender: i % 2 === 0 ? '男' : '女',
    })
  }
}
getData(10);