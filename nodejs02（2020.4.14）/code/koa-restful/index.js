const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");

const app = new Koa();
const router = new Router();

app.use(koaBody());
// 用户 做增删改查
// api

// addUser
// updateUser
// deleteUser
// findUser

// 模拟用户表
let users = [
  {
    id: 1,
    name: "小红",
    age: 18,
  },
  {
    id: 2,
    name: "小明",
    age: 20,
  },
];


// get /users   limit 10

// RESTFul
// get  /users/:id 查找用户
router.get("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const user = users.find((info) => info.id == id);
  if (!user) {
    ctx.throw(404, "用户不存在");
  }
  ctx.body = user;
});

// post /users/:id 创建用户
router.post("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const { name, age } = ctx.request.body;
  const user = {
    id,
    name,
    age,
  };

  users.push(user);
  ctx.body = user;
});

// put  /users/:id 更新用户
router.put("/users/:id", (ctx) => {
  const { id } = ctx.params;
  const { name, age } = ctx.request.body;
  const user = users.find((info) => info.id == id);
  if (name) {
    user.name = name;
  }

  if (age) {
    user.age = age;
  }

  ctx.body = user;
});

// del  /users/:id 删除用户
router.del("/users/:id", (ctx) => {
  const { id } = ctx.params;
  users = users.filter((info)=> info.id != id)
  ctx.body = "ok";
});

// app.use
app.use(router.routes());
app.listen(9000);
