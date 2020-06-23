const Koa = require('koa');
const views = require('koa-views');

const app = new Koa();

// 使用 koa-views
const root = __dirname + '/views';
const opts = {
  extension: 'pug',
};
app.use(views(root, opts));

app.use(async (ctx) => {
  await ctx.render('user', {
    user: 'jsliang',
  });
});

app.listen(9000);