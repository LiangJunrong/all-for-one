const Koa = require('koa')
const app = new Koa()
var views = require('koa-views');

// Must be used before any router is used
console.log(__dirname)
const root = __dirname + '/views'
const opts = {
    extension: 'pug' 
}
app.use(views(root,opts));
app.use(async function (ctx) {
  await ctx.render('user', {
    user: 'John'
  });
});

app.listen(9000)