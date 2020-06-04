let str = '';
let reg = '';

// 1. 命名分组
str = '2020-06-04';
reg = /(?<year>\d*)-(?<month>\d*)-(?<date>\d*)/;
const matchResult = str.match(reg);
console.log(matchResult);
/*
[
  '2020-06-04',
  '2020',
  '06',
  '04',
  index: 0,
  input: '2020-06-04',
  groups: [Object: null prototype] { year: '2020', month: '06', date: '04' },
]
*/
console.log(matchResult.groups.year); // 2020
console.log(matchResult.groups.month); // 06
console.log(matchResult.groups.date); // 04

// 2. 零宽断言：有需求如下
str = 'version1version2version3versionn';
reg = /version\d/g;
console.log(str.replace(reg, '版本')); // 版本版本版本versionn

// 2.1 正向肯定零宽断言
// 肯定
reg = /version(?=\d)/g; // 类似浏览器 URL 的匹配
console.log(str.replace(reg, '版本')); // 版本1版本2版本3versionn

// 否定
reg = /version(?!\d)/g;
console.log(str.replace(reg, '版本')); // version1version2version3版本

// 2.2 负向零宽断言
str = '10px20px30pxnpx';
// 肯定
reg = /(?<=\d+)px/g;
console.log(str.replace(reg, '像素')); // 10像素20像素30像素npx
// 肯定
reg = /(?<!\d+)px/g;
console.log(str.replace(reg, '像素')); // 10px20px30pxn像素