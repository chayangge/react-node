// const path = require('path');
const Koa = require('koa');
const app = new Koa();
let config;
try {
    config = require('./config.json');
}
catch (ex) {
    throw new Error('Failed to start: can not find config file in "config/" directory.');
}

let {host, port} = config;
app.use(ctx => {
    if (ctx.path === '/') {
        ctx.body = 'hello test';
    }
});
app.listen(port, host, () => {
    console.log(`${host}:${port}`);
});
