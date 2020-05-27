const fs = require('fs');

exports.write = (file, fileContent) => {
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
  console.log('写入成功：', result);
};