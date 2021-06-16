import colors from 'colors';
import { getType } from './getType';

// 打印索引
let consoleIndex = 1;

// 重写 console.log
const log = console.log;
console.log = (...args: any) => {
  log(`\n---${consoleIndex++}---`);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (['String', 'Number', 'Boolean'].includes(getType(arg))) {
      log(colors.rainbow(String(arg)));
    } else {
      log(arg);
    }
  }
};

// 重写 console.error
const error = console.error;
console.error = (...args: any) => {
  log(`\n---${consoleIndex++}---`);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (['String', 'Number', 'Boolean'].includes(getType(arg))) {
      error(colors.red(String(arg)));
    } else {
      error(arg);
    }
  }
};