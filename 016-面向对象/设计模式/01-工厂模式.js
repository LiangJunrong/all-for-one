/**
 * @name 01-工厂模式
 * @description 2020-4-26 16:53:40
 */

// const zhangsan = {
//   name: '张三',
//   age: 20,
//   hobby() {
//     console.log('喜欢玩');
//   },
// };
// const lisi = {
//   name: '李四',
//   age: 22,
//   hobby() {
//     console.log('没有爱好');
//   },
// };
// ……王五、赵六……
// 都是同一个模子复制出来的玩意，使用工厂模式

// 工厂模式 - 原版
// function Person(name, age, hobby) {
//   const obj = {}; // 添加原料
//   obj.name = name;
//   obj.age = age;
//   obj.hobby = function() {
//     console.log(hobby);
//   };
//   return obj; // 出厂
// };

// 工厂模式 - 根据 new 运算符改造
function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = function() {
    console.log(hobby);
  };
};

// const person1 = new Person('张三', 20, '喜欢玩');
// const person2 = new Person('李四', 21, '没有爱好');
// console.log(person1);
// console.log(person2);

module.exports = Person;