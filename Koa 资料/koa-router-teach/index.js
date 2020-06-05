const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();



router.redirect("/","/home")
router.get("/home", (ctx) => {
  ctx.body = " router hello world";
});

router.get("/detail", (ctx) => {
  ctx.body = "详情页";
});

router.get("/users", (ctx) => {
  const { id } = ctx.query;
  ctx.body = `users id:${id}`;
});

router.get("/users/:id", (ctx) => {
  const { id } = ctx.params;
  ctx.body = `params users id:${id}`;
});

// app.use
app.use(router.routes());
app.listen(9000);
