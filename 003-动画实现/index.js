class JSLIANG {
  constructor(argument) {
    if (typeof argument === 'string') {
      // 字符串
      const elements = document.querySelectorAll(argument);
      this.addElements(elements);
    } else if (typeof argument === 'function') {
      // 函数
      window.addEventListener('DOMContentLoaded', argument);
    } else {
      // 对象：1 个或者是多个
      if (typeof argument.length === 'undefined') {
        // 1 个对象
        this[0] = argument;
        this.length = 1;
      } else {
        this.addElements(argument);
      }
    }
  }
  addElements(elements) {
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    this.length = elements.length;
  }
  click(fn) {
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener('click', fn);
    }
    return new JSLIANG(this);
  }
  animate(styles, time, fn) {
    for (let i = 0; i < this.length; i++) {
      this[i].style.transition = time / 1000 + 's';
    }
    Object.getOwnPropertyNames(styles).forEach((key) => {
      for (let i = 0; i < this.length; i++) {
        this[i].style[key] = styles[key];
      }
    });
    fn();
    return new JSLIANG(this);
  }
}

function jsliang(argument) {
  return new JSLIANG(argument);
}