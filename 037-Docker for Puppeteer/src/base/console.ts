import colors from 'colors';
import { getType } from '../utils/others';

let index = 1;

// 重写 console.log
const log = console.log;
console.log = (...args: any) => {
  log(colors.cyan(`\n---流程 ${index++}---`));
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (['String', 'Number', 'Boolean'].includes(getType(arg))) {
      log(colors.yellow(String(arg)));
    } else {
      log(arg);
    }
  }
};

// 重写 console.error
const error = console.error;
console.error = (...args: any) => {
  log(colors.cyan(`\n---流程 ${index++}---`));
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (['String', 'Number', 'Boolean'].includes(getType(arg))) {
      error(colors.red(String(arg)));
    } else {
      error(arg);
    }
  }
};