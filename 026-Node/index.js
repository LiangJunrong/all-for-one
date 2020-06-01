const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('content-type', 'text/html; charset=utf-8');
  if (req.url === '/home') {
    res.end('Home 主页');
  } else if (req.url === '/detail') {
    res.end('详情页面');
  } else {
    res.end('hello world');
  }
});

server.listen(8000);