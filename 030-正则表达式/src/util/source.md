## 前言

正则表达式内容

1. 查找
2. 替换
3. 验证
4. 分割

假设我们有一个查找数字的代码：

> index.js

```js
const getNumber = (str) => {
  const result = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      temp += str[i];
    } else if (isNaN(str[i]) && temp) {
      result.push(temp);
      temp = '';
    }
  }
  if (temp) {
    result.push(temp);
  }
  return result;
}

const str = 'fajioeruqeriuq213jflajdfi7t8jfakljfka321';
console.time('查看普通查找时间');
console.log(getNumber(str)); // [ '213', '7', '8', '321' ]
console.timeEnd('查看普通查找时间'); // 查看普通查找时间: 5.616ms
```

那如果我们使用正则去匹配，会是怎样的呢？

> index.js

```js
const regGetNumber = (str) => {
  return str.match(/\d+/g);
}

const str = 'fajioeruqeriuq213jflajdfi7t8jfakljfka321';
console.time('查看正则匹配时间');
console.log(regGetNumber(str)); // [ '213', '7', '8', '321' ]
console.timeEnd('查看正则匹配时间'); // 查看正则匹配时间: 0.741ms
```