const fs = require('fs');

module.exports = () => {
  const template = fs.readFileSync('./news/views/index.html');
  return template;
};