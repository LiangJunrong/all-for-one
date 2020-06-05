const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// or use absolute paths
app.use(serve(__dirname + '/static',{
    index: "main.html"
}));
app.listen(9001);