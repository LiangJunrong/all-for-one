/**
 * @name 01-工厂模式
 * @description 2020-4-26 16:40:18
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

function Person(name, age, hobby) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.hobby = function() {
    console.log(hobby);
  };
  return obj;
};

module.exports = Person;