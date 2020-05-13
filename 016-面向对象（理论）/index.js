/**
 * @name 主调用面板
 * @description 2020-4-26 16:54:15
 */

const Person = require('./设计模式/01-工厂模式');
// const Single = require('./设计模式/02-单例模式');

// 工厂模式
const person1 = new Person('张三', 20, '喜欢玩');
const person2 = new Person('李四', 21, '没有爱好');
console.log(person1); // Person { name: '张三', age: 20, hobby: [Function] }
console.log(person2); // Person { name: '李四', age: 21, hobby: [Function] }

// 单例模式
// const single1 = new Single('jsliang1');
// const single2 = new Single('jsliang2');
// console.log(single1);
// console.log(single2);
// Node.js 上不支持 static 的设置：SyntaxError: Unexpected token =