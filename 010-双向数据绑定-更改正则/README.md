010 - 双向数据绑定 - 更改正则
===

> Create by **jsliang** on **2020-4-22 08:19:58**  
> Recently revised in **2020-4-22 22:20:57**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 操作](#chapter-three) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

在 Vue 中有：{{ 字符串 }} 这种方式渲染 data 中的数据，它可以用正则判断：/\{\{\s*([^\{\}\s]+)\s*\}\}/g

该正则的解读为：

1. 左边有两个 { 以及任意的空格：\{ 表示 {
2. 中间为非 { 或者 } 或者 空格：^ 表示非，+ 表示出现多次
3. 右边有两个 } 以及任意的空格：\} 表示 }
4. 全局匹配：g

但是，正常情况下，我们没那么容易写出这样的正则表达式。

所以，题目：

* 我们可以换个正常人也能写出来的代码来做这个匹配吗？

## <a name="chapter-three" id="chapter-three"></a>三 操作

> [返回目录](#chapter-one)

原代码：

```js
// 正则查找 {{ message }} 而不能是 {{ mess{}age }}
const reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
const textContent = node.textContent;
const textList = textContent.match(reg);
// 判断内容是否为空
if (textList) {
  // 重新组建文本
  let newTextContent = '';
  // 循环获取所有文本
  for (let i = 0; i < textList.length; i++) {
    if (textList[i].match(reg)) {
      const $1 = RegExp.$1;
      const tempData = this._data[$1];
      newTextContent += tempData;
    }
  }
  // 重新渲染文本
  node.textContent = newTextContent;
}
```

改造后代码：

```js
let textContent = node.textContent;
// 1. 设置结果集
const result = [];
// 2. 开始统计
let startFlag = false;
let tempStr = '';
for (let i = 0; i < textContent.length; i++) {
  if (textContent[i] === '{' && textContent[i + 1] === '{') { // 2.1 如果是开头
    startFlag = true;
    i++;
  } else if (startFlag && textContent[i] === '}' && textContent[i + 1] === '}') { // 2.2 如果有开头并且结局一样
    startFlag = false;
    result.push(tempStr.trim()); // result 添加 tempStr 清除掉首尾空格后的数据
    tempStr = '';
    i++;
  } else {
    tempStr += textContent[i]; // 正常添加数据
  }
}
// 3. 遍历，将所有结果进行替换
for (let i = 0; i < result.length; i++) {
  textContent = textContent.replace(result[i], this._data[result[i]]);
}
// 4. 重新渲染
node.textContent = textContent;
```

大致思路还是 OK 的。

---

**不折腾的前端，和咸鱼有什么区别！**

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。