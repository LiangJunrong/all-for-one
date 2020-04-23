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
        let textContent = node.textContent.trim();
        const result = [];
        const replaceResult = [];
        let startFlag = false;
        let tempStr = '';
        for (let i = 0; i < textContent.length; i++) {
          if (textContent[i] === '{' && textContent[i + 1] === '{') {
            startFlag = true;
            i++;
          } else if (startFlag && textContent[i] === '}' && textContent[i + 1] === '}') {
            startFlag = false;
            replaceResult.push('{{' + tempStr + '}}');
            result.push(tempStr.trim());
            tempStr = '';
            i++;
          } else if (startFlag) {
            tempStr += textContent[i];
          }
        }
        for (let i = 0; i < result.length; i++) {
          textContent = textContent.replace(replaceResult[i], this._data[result[i]]);
        }
        node.textContent = textContent;
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