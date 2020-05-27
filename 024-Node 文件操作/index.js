const { write } = require('./action/write');
const { read } = require('./action/read');
const { rename } = require('./action/rename');
const { unlink } = require('./action/unlink');
const { copy } = require('./action/copy');

// 定义变量
const fileContent = `console.log('Hello everyone:');\nconsole.log('my name is jsliang.');`;
const prevFile = './dist/jsliang.js';
const nextFile = './dist/liangjunorng.js';

// 写入
write(prevFile, fileContent);

// 读取
read(prevFile);

// 修改
rename(prevFile, nextFile);

// 删除
unlink(nextFile);

// 复制
copy(prevFile, nextFile);