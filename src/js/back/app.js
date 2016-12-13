const app       = require('koa')();
const Router    = require('koa-router');
const api       = new Router({
    prefix: '/api/v1'
});
require('./ctrls')(api);
const port = process.env.PORT || 5000;


api.get('/', function *(next) {
    this.body = 'Hello API';
    yield next;
});

// api.get(TestClass.route, TestClass.get);

app
    .use(api.routes())
    .use(api.allowedMethods());

app.listen(port, () => console.log(`Listening on ${port} port`));
