const koa       = require('koa');
const router    = require('koa-router');
const app = koa();

app.use(function*() {
    this.body = 'hello w';
});

app.listen('3000', () => console.log('Listening on 3000 port'));
