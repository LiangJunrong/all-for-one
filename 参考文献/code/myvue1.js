class Vue extends EventTarget {
    constructor(options) {
        super();
        this.options = options;
        this._data = options.data;
        this.observer(this._data);
        this.compile();
    }
    observer(data) {
            // 数据劫持、观察数据；
            for (let key in data) {
                let value = data[key];
                let _this = this;
                Object.defineProperty(data, key, {
                    configurable: true,
                    enumerable: true,
                    get() {
                        console.log("get...");
                        return value;
                    },
                    set(newValue) {
                        // 触发事件
                        let event = new CustomEvent(key, {
                            detail: newValue
                        });
                        _this.dispatchEvent(event);
                        console.log("set...");
                        if (newValue !== value)
                            value = newValue;
                    }
                })
            }
        }
        // 编译
    compile() {
        let ele = document.querySelector(this.options.el);
        let childNodes = ele.childNodes;
        console.log(childNodes);
        this.compileNode(childNodes);
    }
    compileNode(childNodes) {
        childNodes.forEach(node => {
            if (node.nodeType === 3) {
                // 文本节点
                console.log("文本节点");
                // 正则查找双大括号
                // 分组；
                let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
                // 文本内容
                let textContent = node.textContent;
                if (reg.test(textContent)) {
                    let $1 = RegExp.$1;
                    console.log("有表达式", "(" + $1 + ")");
                    console.log(this._data[$1]);
                    let myData = this._data[$1];
                    // 把data里的数据替换到表达式里；
                    node.textContent = textContent.replace(reg, myData)

                    // 绑定事件二次渲染视图；
                    this.addEventListener($1, e => {
                        // console.log("修改了：", e);
                        let newValue = e.detail;
                        let oldValue = this._data[$1];
                        let _reg = new RegExp(oldValue, "g");
                        node.textContent = node.textContent.replace(_reg, newValue);
                    })

                }
            } else if (node.nodeType === 1) {
                // 元素节点
                console.log("元素节点");
                // 有没有子节点；
                // 递归；
                if (node.childNodes.length > 0) {
                    this.compileNode(node.childNodes);
                }
            }
        })
    }
}

//发布订阅；