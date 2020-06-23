const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.redirect('/', '/home'); // http://localhost:9000 -> http://localhost:9000/home

router.get('/home', (ctx) => {
  ctx.body = 'koa-router'; // koa-router
})

// http://localhost:9000/home/123
router.get('/home/:id', (ctx) => {
  const { id } = ctx.params;
  ctx.body = `URL 参数：id=${id}`; // URL 参数：id=123
})

app.use(router.routes());
app.listen(9000);