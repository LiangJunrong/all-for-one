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
            let dep = new Dep();
            for (let key in data) {
                let value = data[key];
                let _this = this;
                Object.defineProperty(data, key, {
                    configurable: true,
                    enumerable: true,
                    get() {
                        if (Dep.target) {
                            dep.addSub(Dep.target);
                        }
                        console.log("get...", dep);
                        return value;
                    },
                    set(newValue) {
                        dep.notify(newValue);
                        // 触发事件
                        // let event = new CustomEvent(key, {
                        //     detail: newValue
                        // });
                        // _this.dispatchEvent(event);
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
                    // this.addEventListener($1, e => {
                    //     // console.log("修改了：", e);
                    //     let newValue = e.detail;
                    //     let oldValue = this._data[$1];
                    //     let _reg = new RegExp(oldValue, "g");
                    //     node.textContent = node.textContent.replace(_reg, newValue);
                    // })
                    // 二次渲染视图
                    new Watcher(this._data, $1, newValue => {
                        let oldValue = this._data[$1];
                        let _reg = new RegExp(oldValue, "g");
                        node.textContent = node.textContent.replace(_reg, newValue);
                    })
                }
            } else if (node.nodeType === 1) {
                // 元素节点
                console.log("元素节点");
                let attrs = node.attributes;
                // console.log(attrs);
                [...attrs].forEach(attr => {
                    let attrName = attr.name;
                    let attrValue = attr.value;
                    if (attrName === "v-model") {
                        node.value = this._data[attrValue];
                        node.addEventListener("input", e => {
                            // console.log("输入了!!", e.target.value);
                            let inputValue = e.target.value;
                            this._data[attrValue] = inputValue;
                        })
                    }
                })


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
// 收集器；
class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
            this.subs.push(sub);
        }
        // 发布
    notify(newValue) {
        this.subs.forEach(sub => {
            sub.update(newValue);
        })
    }
}
// 订阅者
class Watcher {
    constructor(data, key, cb) {
        Dep.target = this;
        this.cb = cb;
        // 人为触发get；
        data[key];
        Dep.target = null;
    }
    update(newValue) {
        this.cb(newValue);
    }
}