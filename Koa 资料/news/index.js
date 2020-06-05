const http = require("http");
const fs = require("fs");
const mime = require("./mime.json");
const path = require("path");
const url = require("url");
const news = require("./news");
const detail = require("./detail");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("content-type", "text/html;charset=utf-8");
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === "/") {
    const p = query.p;
    res.end(news(+p));
  } else if (pathname === "/detail") {
    // const readStream = fs.createReadStream("./detail.html");
    // readStream.pipe(res);
    const { id } = query;
    res.end(detail(+id));
  } else {
    // 静态文件加载
    // 通过后缀拿到 mime
    if (req.url.includes("favicon")) return;
    const extname = path.extname(req.url);
    const mimeType = mime[extname];
    res.setHeader("content-type", `${mimeType};charset=utf-8`);
    const css = fs.readFileSync(`.${req.url}`);
    res.end(css);
  }
});

server.listen(9000);
