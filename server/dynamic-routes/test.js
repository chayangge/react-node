const fs = require('fs');
let test = (router) => {
    router.get('/', async (ctx) => {
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./index.html'); ;
        // ctx.response.body = fs.createReadStream(__dirname+'/index.html');;
    });

    router.get('/test', async (ctx) => {
        // ctx.body = 'test success!!'
        ctx.status = 302;
        ctx.redirect('http://baidu.com');
        // ctx.body = 'Redirecting to shopping cart';
    });
};
module.exports = test;
