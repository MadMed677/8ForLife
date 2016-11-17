const app       = require('koa')();
const Router    = require('koa-router');
const api       = new Router({
    prefix: '/api/v1'
});

const TestClass = require('./test');

api.get('/', function *(next) {
    this.body = 'Hello API';
    yield next;
});

api.get(TestClass.route, TestClass.get);

app
    .use(api.routes())
    .use(api.allowedMethods());

app.listen('3000', () => console.log('Listening on 3000 port'));
