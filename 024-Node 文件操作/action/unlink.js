const fs = require('fs');

exports.unlink = (file) => {
  // fs.unlink(file, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log('删除成功');
  // });
  const result = fs.unlinkSync(file);
  console.log('删除成功：');
  console.log(result);
}