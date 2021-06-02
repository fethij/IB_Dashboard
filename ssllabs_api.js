
const BASE_URI = 'https://api.dev.ssllabs.com/api/v3/';
const { response } = require('express');
const https = require('https');
const { callbackify } = require('util');

https.get(BASE_URI + '/info', (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });
    
    
    response.on('end', () => {
        //return callback(data);
        console.log(JSON.stringify(data));
    })
})

