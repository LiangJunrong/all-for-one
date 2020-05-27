const fs = require('fs');

exports.rename = (prev, next) => {
  const result = fs.renameSync(prev, next);
  console.log(result);
}