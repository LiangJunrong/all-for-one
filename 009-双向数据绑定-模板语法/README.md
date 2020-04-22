009 - 双向数据绑定 - 模板语法
===

> Create by **jsliang** on **2020-4-20 21:46:11**  
> Recently revised in **2020-4-22 08:34:00**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

我们都知道，Vue 中有一个 `{{ 字符串 }}`，它可以解析里面的内容，并将其渲染出来，那么我们能不能对其实现方式进行简单模仿呢？

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>009 - 双向数据绑定 - Vue</title>
  <script src="https://cdn.bootcss.com/vue/2.6.11/vue.js"></script>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>
  <script>
    // 数据驱动
    const vm = new Vue({
      el: '#app',
      data: {
        message: 'Hello jsliang!',
      },
    });
  </script>
</body>
</html>
```

当然，我们仅仅要求能展示 `message`，而不解析表达式形式，例如：`{{ 2 > 3 ? message : 123 }}`。

毕竟我们不需要重新造一个 `Vue`，而是体验一下人家的强大。

所以我们应该怎么实现呢？

实现方式：

```js
class Vue {
  constructor(options) {
    this.options = options;
    this._data = options.data;
    this.complie();
  };
  complie = () => {
    const element = document.querySelector(this.options.el);
    const childNodes = element.childNodes;
    this.complieNode(childNodes);
  };
  complieNode = (childNodes) => {
    childNodes.forEach((node) => {
      if (node.nodeType === 3) { // 文本节点
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
      } else if (node.nodeType === 1) { // 元素节点
        // 如果存在元素节点，并且里面含有内容
        // 那么就通过递归，将所有内容解析出来
        if (node.childNodes.length) {
          this.complieNode(node.childNodes);
        }
      }
    });
  }
}
```

1. 通过 `document.querySelector(this.options.el)` 获取 `#app` 里面的元素
2. 通过 `element.childNodes` 查看该元素的节点
3. 通过 `node.nodeType` 判断每个元素的节点类型，是文本节点还是元素节点
4. 如果是文本节点，则通过正则判断 `{{ message }}` 形式，然后将 `message` 提取出来和 `data` 中的数据比较，并将里面的所有符合要求的数据用 `data` 替换
5. 如果是元素节点，那就简单点，直接递归到它为单个内容为止。

综上，我们完成了解析，从而产生新的疑惑：

* 我们使用了正则表达式 `/\{\{\s*([^\{\}\s]+)\s*\}\}/g` 来判断 `{{ message }}` 格式，我们能换成人能看懂的方式吗？

---

**不折腾的前端，和咸鱼有什么区别！**

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。