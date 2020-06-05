const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  // 1. 挂载数据到全局
  ctx.state = {
    name: 'jsliang',
  };
  // 2. 将数据换成同步
  const start = Date.now();
  await next();
  console.log(Date.now() - start); // 2008
});

const delay = (arguments) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })
}

app.use(async (ctx) => {
  await delay();
  console.log(ctx.state.name); // jsliang
  ctx.body = '延迟展示';
})

app.listen(9000);