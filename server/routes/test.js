let test = (router) => {
    console.log('hhhhhh:',router);
    router.get('/ajax/location/get_address',async (ctx) => {
        console.log('ctx.path----',ctx.path);
        ctx.body = 'test success!!'
    });
    // router.get('/test', async (ctx, next) => {
    //     console.log('index.......');
    //     ctx.body = 'test index';
    //   });
};
module.exports = test;

