const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  ctx.status = 302
  ctx.set("location","https://www.baidu.com")
  ctx.body = "http code";
});
app.listen(9000);
