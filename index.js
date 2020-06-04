const str = 'abc123def456abc123';
const reg = /\d+/g;

// 1. test
console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 6

// 2. exec
console.log(reg.exec(str));
console.log(reg.lastIndex); // 12
/**
  [
    '456',
    index: 9,
    input: 'abc123def456abc123',
    groups: undefined,
  ]
 */
console.log(reg.exec(str));
console.log(reg.lastIndex); // 18
/**
  [
    '123',
    index: 15,
    input: 'abc123def456abc123',
    groups: undefined,
  ]
 */