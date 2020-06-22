const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(koaBody());

const mockData = require('./mock');
const { users } = require('./mock');

// 用户 做增删改查：
// * addUser
// * updateUser
// * deleteUser
// * findUser

// RestFul
// get /users/:id 查找用户
// post /users/:id 创建用户
// put /users/:id 更新用户
// delete /users/:id 删除用户

// get
router.get('/users/:id', (ctx) => {
  const { id } = ctx.params;
  const users = mockData.users;
  const index = users.findIndex(item => item.id === id);
  if (index > -1) {
    ctx.body = `Hello ${users[index].name}`; // http://localhost:9000/users/2 -> Hello jsliang2
  } else {
    ctx.throw(404, '查无此用户！');
  }
});

// post
router.post('/users/:id', (ctx) => {
  const { id } = ctx.params;
  console.log(ctx.request.body);
  const { name, age } = ctx.request.body;
  const user = {
    id,
    name,
    age,
  };
  mockData.users.push(user);
  ctx.body = mockData.users;
  /*
    [
      { "id":"1", "name":"jsliang1", "age":"18" },
      { "id":"2", "name":"jsliang2", "age":"28" },
      { "id":"3", "name":"jsliang3", "age":"38" },
    ]
  */
});

// put
router.put('/users/:id', (ctx) => {
  const { id } = ctx.params;
  const { name, age } = ctx.request.body;
  const users = mockData.users;
  const index = users.findIndex(item => item.id === id);
  if (index > -1) {
    users[index].name = name;
    users[index].age = age;
    ctx.body = users;
  } else {
    ctx.body = '查无此用户！';
  }
  /*
    [
      { "id":"1", "name":"jsliang1", "age":"18" },
      { "id":"2", "name":"jsliang", "age":"38" },
    ]
  */
});

// delete
router.del('/users/:id', (ctx) => {
  const { id } = ctx.params;
  const users = mockData.users;
  ctx.body = users.filter(item => item.id !== id);
  // [ { "id":"1", "name":"jsliang1", "age":"18" } ]
})

app.use(router.routes());
app.listen(9000);