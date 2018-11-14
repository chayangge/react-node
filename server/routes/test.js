const fs = require('fs');
let test = (router) => {
    console.log('hhhhhh:',router);
    // router.get('/ajax/location/get_address',async (ctx) => {
    //     console.log('ctx.path----',ctx.path);
    //     ctx.body = 'test success!!'
    // });
    // router.get('/test', async (ctx, next) => {
    //     console.log('index.......');
    //     ctx.body = 'test index';
    //   });

    router.get('/',async (ctx) => {
        // console.log('ctx.path----',ctx.path);
        // ctx.body = 'test success!!'
        // ctx.body = 'qqqqqq to shopping cart';
        let html = fs.createReadStream('./index.html');
        console.log(html);
        ctx.response.type = 'html';
        ctx.response.body = html;
    });

    router.get('/test',async (ctx) => {
        // console.log('ctx.path----',ctx.path);
        // ctx.body = 'test success!!'
        ctx.status = 302;
        ctx.redirect('http://baidu.com');
        ctx.body = 'Redirecting to shopping cart';
    });

    router.post('/test',async (ctx) => {
        // console.log('ctx.path----',ctx.path);
        // ctx.body = 'test success!!'
        ctx.status = 302;
        ctx.redirect('http://baidu.com');
        ctx.body = 'Redirecting to shopping cart';
    });
};
module.exports = test;

