const html = __dirname + '/client';

const port = process.env.PORT || 4000;
const apiUrl = '/api';

// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
var mongoose = require('mongoose');
var routes = require('./server/routes/routes.js');
var db = require('./server/config/db');

//db connection
//mongoose.connect(db.mongo.uri, {});

mongoose.connect(db.mongo.uri, {}, function(err) {
    if (err) {throw err;}
    else {
      console.log('Db Connection successful!');
    }
});

var app = express();

app
    .use(compression())
    .use(bodyParser.json())
    // Static content
    .use(express.static(html))
    .use('/api', routes)
    // Start server
    .listen(port, function () {
        console.log('Server running on port: ' + port);
    });

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    
        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
          res.send(200);
        }
        else {
          next();
        }
    };
    app.use(allowCrossDomain);

    app.get('/api/', function(req, res) {
        res.send('Hello World');
    });