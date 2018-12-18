let Promis = require('bluebird');
let request = require('co-request');
// let config = require('../config.json');

let indexModel = async (ctx) => {
    let option = {
        method: 'GET',
        uri: 'http://app.diantudaikuan.com/api/dk/index4'
    };
    console.log('option:', option);
    let data = await request(option);
    console.log('data:', data.body);
    // ctx.body = '我是首页.';
};
indexModel();
