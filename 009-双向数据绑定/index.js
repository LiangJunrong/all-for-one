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