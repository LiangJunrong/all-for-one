class JSLIANG {
  constructor(argument) {
    console.log(typeof argument); // string/function/...
    if (typeof argument === 'string') {
      // 如果是字符串，表明需要获取 DOM 节点
      // 举例：jsliang('.btn1')
      this.addElements(document.querySelectorAll(argument));
    } else if (typeof argument === 'function') {
      // 如果是函数，通过 DOMContentLoaded 监听页面 onload 完毕然后执行
      // 举例：jsliang(() => { ... })
      window.addEventListener('DOMContentLoaded', argument);
    } else if (typeof argument === 'object') {
      // 如果是对象，那么它是不是传了 DOM 节点进来
      if (typeof argument.length === 'undefined') {
        // 当对象是 1 个
        this[0] = argument;
        this.length = 1;
      } else {
        // 当对象是多个
        this.addElements(argument);
      }
    }
  }
  // 添加元素
  addElements(elements) {
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
  }
  // 判断点击
  click(fn) {
    for (let i = 0; i < this.length; i++) {
      this[i].onclick = () => {
        fn();
      }
    }
  }
  // 绑定事件
  on(eventName, fn) {
    // 'mousemove   mousedown    mouseover'
    eventName = eventName.replace(/\s+/g, ' ');
    const eventList = eventName.split(' ');
    // 针对每个节点绑定事件
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < eventList.length; j++) {
        this[i].addEventListener(eventList[j], fn);
      }
    }
  }
}

function jsliang(arg) {
  return new JSLIANG(arg);
}