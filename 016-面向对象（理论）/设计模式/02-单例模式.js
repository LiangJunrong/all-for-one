/**
 * @name 02-单例模式
 * @description 2020-4-28 08:10:03
 */

// 单例模式，即一个实例
// 单例：1、需求；2、节约性能
// export default class Person {
//   // 设置静态对象
//   static instance = null;
//   constructor(name) {
//     // 第二次实例化后，返回前面实例化的内容
//     if (Person.instance) {
//       return Person.instance;
//     }
//     // 第一次实例化
//     Person.instance = this; // this ——> 实例化对象
//     this.name = name;
//     this.age = 20;
//   }
// }

class Person {
  constructor(name) {
    this.name = name;
    this.age = 20;
  }
}

let instance;
export default function(...arg) {
  if (!instance) {
    instance = new Person(...arg);
  }
  return instance;
}