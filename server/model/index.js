let Promis = require('bluebird');
let request = require('request');
let config = require('../config.json');

let indexModel = async (ctx) => {
    // let option = {
    //     // headers:{
    //     //     "Content-Type": "application/json",
    //     //     "Accept": '*'
    //     // },
    //     method: 'GET',
    //     uri:'http://app.diantudaikuan.com/index'
    //     // uri: config.appName+ctx.path
    // }
    // console.log('option:',option);
    // let data = await request(option);
    // console.log('data:',data.body);
    // ctx.body = '我是首页.';

    let option = {
        method: 'GET',
        uri: 'http://app.diantudaikuan.com/api/dk/index4'
    }
    console.log('option:',option);
    let data = await request(option);
    console.log('data:',data.body);
    ctx.body = data.body || '空';
}
module.exports = indexModel;