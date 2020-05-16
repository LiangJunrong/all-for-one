function fn1() {
  console.log('fn1...');
}
function fn2() {
  console.log('fn2...');
}

let handle = {};
//  { myevent: [fn1, fn2], myevent2: [fn3, fn4] }
// 绑定事件
function addEvent(eventName, fn) {
  if (typeof handle[eventName] === "undefined") {
    handle[eventName] = [];
  }
  handle[eventName].push(fn);
}
// 触发
function trigger(eventName) {
  if (!eventName in handle) {
    return;
  }
  handle[eventName].forEach((event) => {
    event();
  });
}

// 事件绑定
addEvent('myevent', fn1);
addEvent('myevent', fn2);
// 触发
trigger('myevent');
// fn1...
// fn2...