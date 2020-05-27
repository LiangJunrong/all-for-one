const fs = require('fs');

exports.read = (file) => {
  // fs.readFile('./dist/jsliang.js', '', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(data.toString());
  // });

  // 同步写法
  const data = fs.readFileSync(file);
  console.log('读取成功：');
  console.log(data);
  console.log(data.toString());
}