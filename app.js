var express = require("express");
var path = require("path");
var http = require("https");
var url = require("url");

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/views', express.static('views'));

app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});

const BASE_URI = 'https://api.dev.ssllabs.com/api/v3';
const ANALYZE = '/analyze?host=hva.nl';
// const { response } = require('express');
// const https = require('https');
// const { callbackify } = require('util');

// https.get(BASE_URI + ANALYZE, (response) => {
//     let data = '';

    

//     response.on('data', (chunk) => {
//         data += chunk;
//     });
//     //response.setHeader('Content-Type', 'application/json');
//     //response.set('Content-Type', 'application/json')
//     response.on('end', () => {
//         //return callback(data);
        
//         //console.log(data);

        
//         console.log('host ==>' + JSON.stringify(data));

//         //console.log('port ==>' + data['port']);
//     })
// })




// const request = require('request-promise-native');

// const options = {
//     method: 'GET',
//     uri: BASE_URI + ANALYZE
// }

// request(options).then(response => {
//     console.log(response.data.port);
// }, error => {
//     console.log(error);
// });

// hva.nl
// uva.nl
// sis.hva.nl
// mijn.uva.nl


// host - assessment host, which can be a hostname or an IP address
// port - assessment port (e.g., 443)
// protocol - protocol (e.g., HTTP)
// status - assessment status; possible values: DNS, ERROR, IN_PROGRESS, and READY.
// ipAddress - endpoint IP address, in IPv4 or IPv6 format.
// serverName - server name retrieved via reverse DNS
// grade - possible values: A+, A-, A-F, T (no trust) and M (certificate name mismatch)
// gradeTrustIgnored - grade (as above), if trust issues are ignored
// hasWarnings - if this endpoint has warnings that might affect the score (e.g., get A- instead of A).
// certChains[] - Server Certificate chains
// protocolIntolerance - indicates protocol version intolerance issues:
// issues - list of certificate issues, one bit per issue:
// sha256Hash - sha256 hash of the certificate

var links = ['hva.nl', 'uva.nl','sis.hva.nl',];
var hva = 'hva.nl';

const axios = require('axios');

axios.get(BASE_URI + "/analyze?host=" + hva)
         .then(response => {
        console.log(response.data.endpoints[0].grade);
        // console.log(response.data);
       // res.send(response.data.status);
    })
    .catch(error => {
        console.log(error);
    });

    // for (link of links) {
        
    // }

