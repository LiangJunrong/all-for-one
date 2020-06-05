const Koa = require("koa");

const app = new Koa();

//实现一个中间件
app.use(async (ctx, next) => {
    ctx.state ={
        name:"hahha"    
    }
  const start = Date.now();
  await next();
  console.log(Date.now() - start);
});

app.use(async (ctx) => {
  // 延迟 2 秒
  console.log(ctx.state.name)
  await delay();
  ctx.body = "实现中间件";
});

function delay(arguments) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

// 执行顺序
// 中间件 -> fn
// 通过 use  添加中间件
// app.use((ctx,next) => {
//     console.log("fn1 start >>")
//     next()
//     ctx.body = "fn1 end"
//     console.log("fn1 end <<")
// });

// app.use((ctx,next) => {
//     console.log("fn2 start >>")
//     next()
//     ctx.body = "fn2 end"
//     console.log("fn2 end <<")
// });
// app.use((ctx,next) => {
//     console.log("fn3 start >>")
//     next()
//     console.log("fn3 end <<")
// });

app.listen(9000);
