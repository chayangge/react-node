'use strict';

const url = require('url');
const request = require('co-request');
const names = ['headers', 'body', 'json'];

const proxyRequest = async (ctx, options) => {
    const newOptions = {};
    
    let result;

    newOptions.uri = url.format(urlObj);


    if (!newOptions.headers) {
        newOptions.headers = {};
    }

    try {
        result = await request(newOptions);
    }
    catch (error) {
        result = error;
    }
    return result;
};

module.exports = proxyRequest;
