const http = require('http'); // http 服务
const fs = require('fs'); // 文件系统
const path = require('path'); // path 系统
const url = require('url'); // url 路径
const mime = require('./util/mime.json'); // 后缀格式工具
const news = require('./news/news');

// 开启服务
const server = http.createServer((req, res) => {

  // 默认设置请求头为 html 格式
  res.setHeader('content-type', 'text/html; charset=utf-8');

  const { pathname, query } = url.parse(req.url, true);
  console.log('pathname：', pathname); // pathname： /js/main.js

  // 首页
  if (pathname === '/') {
    const p = query.p;
    res.end(news(p));
  } else {
    // 静态文件加载，通过后缀拿到 mime
    if (req.url.includes('favicon')) {
      return;
    }
    const extname = path.extname(req.url);
    console.log('extname：', extname); // extname： .js
    
    const mimeType = mime[extname];
    console.log('mimeType：', mimeType); // mimeType： application/x-javascript

    res.setHeader('content-type', `${mimeType}; charset=utf-8`);
    const css = fs.readFileSync(`./news${req.url}`);
    res.end(css);
  }
});

server.listen(8000);