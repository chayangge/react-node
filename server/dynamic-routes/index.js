const fs = require('fs');
let indexModel = require('../model/index');
let index = (router) => {
    router.get('/index', indexModel);
};
module.exports = index;
