const http = require('http'); // http 服务
const fs = require('fs'); // 文件系统
const path = require('path'); // path 系统
const url = require('url'); // url 路径
const mime = require('./util/mime.json'); // 后缀格式工具

// 开启服务
const server = http.createServer((req, res) => {

  // 默认设置请求头为 html 格式
  res.setHeader('content-type', 'text/html; charset=utf-8');

  const { pathname } = url.parse(req.url, true);
  console.log('pathname：', pathname); // pathname： /js/main.js
  /**
    * @description：url.parse(req.url) 输出
    * @console 
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: null,
      pathname: '/favicon.ico',
      path: '/favicon.ico',
      href: '/favicon.ico',
    }
  */

  // 首页
  if (pathname === '/') {
    const templateHtml = fs.readFileSync('./html/index.html');
    res.end(templateHtml);
  } else if (pathname === '/detail') {
    // 详情页 - 这里使用 stream 流
    const templateStream = fs.readFileSync('./html/stream.html');
    res.pipe(templateStream);
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
    const css = fs.readFileSync(`.${req.url}`);
    res.end(css);
  }
});

server.listen(8000);