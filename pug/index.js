const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');

const app = new Koa();
const router = new Router();

app.use(views(__dirname + 'views', {
  map: {
    html: 'pug',
  },
}));

router.get('./', async ctx => {
  ctx.body = 'hello';
});

app.use(router.routes());
app.listen(3000);