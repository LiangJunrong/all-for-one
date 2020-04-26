const Person = require('./设计模式/01-工厂模式');

// 工厂模式
const person1 = new Person('张三', 20, '喜欢玩');
const person2 = new Person('李四', 21, '没有爱好');
console.log(person1);
console.log(person2);