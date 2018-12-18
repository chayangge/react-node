const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
let Rout = require('koa-router');
let router = new Rout();
let config;
try {
    config = require('./config.json');
}
catch (ex) {
    throw new Error('Failed to start: can not find config file in "config/" directory.');
}

let {host, port} = config;
// app.use((ctx,next) => {
//     if (ctx.path === '/') {
//         ctx.body = 'hello ccc';
//     }
//     else {
//         next()
//     }
// });

fs.readdirSync(__dirname + '/dynamic-routes').filter((f) => {
    return f.endsWith('.js');
}).forEach(item => {
    let sigRouter = require(__dirname + '/dynamic-routes/' + item);
    sigRouter(router);
});

app.use(router.routes());

app.listen(port, host, () => {
    console.log(`${host}:${port}`);
});
