const fs = require('fs');
const { write } = require('./write');

exports.copy = (prevFile, nextFile) => {
  write(prevFile, `console.log('Hello everyone:');\nconsole.log('my name is jsliang.');`);
  fs.copyFile(prevFile, nextFile, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('拷贝成功');
  });
}