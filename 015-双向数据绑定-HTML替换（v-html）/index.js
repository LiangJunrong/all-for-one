// 发布订阅
// 发布者
class Dep {
  constructor() {
    this.subs = [];
  };
  addSub(sub) {
    this.subs.push(sub);
  };
  // 发布
  notify(newValue, key) {
    this.subs.forEach((sub) => {
      sub.update(newValue, key);
    });
  }
}
// 订阅者
class Watcher {
  constructor(data, key, cb) {
    Dep.target = this;
    this.cb = cb;
    // 人为触发 get
    data[key];
    Dep.target = null;
  };
  update(newValue, key) {
    this.cb(newValue, key);
  }
}

class Vue extends EventTarget {
  constructor(options) {
    super();
    this.options = options;
    this._data = options.data;
    this.observer(this._data);
    this.complie();
  };
  observer(data) {
    const dep = new Dep();
    for (let key in data) {
      let value = data[key];
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          if (Dep.target) {
            dep.addSub(Dep.target);
          }
          return value;
        },
        set(newValue) {
          dep.notify(newValue, key);
          if (newValue !== value) {
            value = newValue;
          }
        }
      });
    }
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
        if (result.length) {
          for (let i = 0; i < result.length; i++) {
            textContent = textContent.replace(replaceResult[i], this._data[result[i]]);
          }
          node.textContent = textContent;
  
          // // 绑定事件二次渲染视图
          for (let i = 0; i < result.length; i++) {
            new Watcher(this._data, result[i], (newValue, key) => {
              if (result[i] === key) {
                textContent = textContent.replace(this._data[result[i]], newValue);
              }
              node.textContent = textContent;
            });
          }
        }
      } else if (node.nodeType === 1) { // 元素节点
        // 绑定 v-modal
        const attrs = node.attributes;
        [...attrs].forEach((attr) => {
          const attrName = attr.name;
          const attrValue = attr.value;
          if (attrName === 'v-modal') {
            node.value = this._data[attrValue];
            node.addEventListener('input', (e) => {
              const inputValue = e.target.value;
              this._data[attrValue] = inputValue;
            });
          }
        });

        // 如果存在元素节点，并且里面含有内容
        // 那么就通过递归，将所有内容解析出来
        if (node.childNodes.length) {
          this.complieNode(node.childNodes);
        }
      }
    });
  }
}