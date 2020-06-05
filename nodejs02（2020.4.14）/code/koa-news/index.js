const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const serve = require("koa-static");
const news = require("./news");
const detail = require("./detail");

const app = new Koa();
const router = new Router();

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);
app.use(serve(__dirname + "/static"));

router.get("/news", async (ctx) => {
  const { p } = ctx.query;
  await ctx.render("news", news(+p));
});

router.get("/detail", async (ctx) => {
  const { id } = ctx.query;
  await ctx.render("detail", detail(+id));
});

app.use(router.routes());
app.listen(9001);
