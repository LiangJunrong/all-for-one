const fs = require('fs');

const fileContent = `
console.log('Hello everyone:');
console.log('my name is jsliang.');
`;

fs.writeFile(
  'jsliang.js',
  fileContent,
  (err) => {
    if (err) {
      console.log('报错：', err);
    }
    console.log('写入成功！'); 
  }
)

fs.readFile('jsliang.js', '', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
})