const fs = require('fs');

// 写入文件
const write = (file, fileContent) => {
  // 每个 API，不加 Sync 都是异步操作，加了 Sync 就是同步操作
  // fs.writeFile(
  //   file,
  //   fileContent,
  //   (err) => {
  //     if (err) {
  //       console.log('报错：', err);
  //     }
  //     console.log('写入成功！'); 
  //   }
  // )

  // 同步写法
  const result = fs.writeFileSync(file, fileContent);
  console.log('---写入成功：', result);
  console.log(result);
};

// 读取文件
const read = (file) => {
  const result = fs.readFileSync(file);
  console.log('---读取成功：');
  console.log(result);
  console.log(result.toString());
};

// 修改文件
const rename = (prev, next) => {
  const result = fs.renameSync(prev, next);
  console.log('---修改成功：');
  console.log(result);
};

// 删除文件
const unlink = (file) => {
  const result = fs.unlinkSync(file);
  console.log('---删除成功：');
  console.log(result);
};

// 复制文件
const copy = (prevFile, nextFile) => {
  // 之前文件被删了，尴尬地再新建一次
  write(prevFile, `console.log('Hello everyone:');\nconsole.log('my name is jsliang.');`);

  const result = fs.copyFileSync(prevFile, nextFile);
  console.log('---拷贝成功：');
  console.log(result);
};

module.exports = {
  write,
  read,
  rename,
  unlink,
  copy,
};