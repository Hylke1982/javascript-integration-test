const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/**
 * Expose TEST Get endpoint
 */
app.get('/test', function (req, res) {

    console.log("Accessing test");


    request(
        { method: 'GET'
            , uri: 'http://test.nl/test'
            , gzip: true
        }
        , function (error, response, body) {
            res.json(body);
        }
    );


});

function doAction() {

}

// For testing
module.exports = app;