const http = require('http');
const fs = require('fs');
const mime = require('./mime.json');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('content-type', 'text/html; charset=utf-8');

  const { pathname } = url.parse(req.url, true);
  console.log(pathname);
  /*
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
    href: '/favicon.ico' }
  */

  if (pathname === '/home') {
    const templateStream = fs.readFileSync('./stream.html');
    res.pipe(templateStream);
  } else if (pathname === '/detail') {
    const templateHtml = fs.readFileSync('./index.html');
    res.end(templateHtml);
  } else {
    // 静态文件加载
    // 通过后缀拿到 mime
    if (req.url.includes('favicon')) {
      return;
    }
    const extname = path.extname(req.url);
    console.log(extname);
    const mimeType = mime[extname];

    res.setHeader('content-type', `${mimeType}; charset=utf-8`);
    const css = fs.readFileSync(`.${req.url}`);
    res.end(css);
  }
});

server.listen(8000);