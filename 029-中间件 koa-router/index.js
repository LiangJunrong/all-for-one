const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.redirect('/', '/home');
router.get('/home', (ctx) => {
  ctx.body = 'koa-router';
})

router.get('/home/:id', (ctx) => {
  const { id } = ctx.params;
  ctx.body = `URL 参数：id=${id}`;
})

app.use(router.routes());
app.listen(9000);