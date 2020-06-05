const Koa = require("koa");

// 4个对象
// application
const app = new Koa();


app.use((ctx) => {
  // context 上下文
  //   ctx.body = "hello world"
  //   ctx.body = "你好 world"
  // res
  // req
  // ctx.res 原生的 res
  // ctx.req 原生的 req
  // ctx.request req  它对原生的 req 做了封装
  // ctx.response res res 
//   ctx.body = {
//     msg: "hello 世界",
//   };
  ctx.response.body = "你好世界"
//   ctx.body 
//   res.end
  
});

app.listen(9000);
