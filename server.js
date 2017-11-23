/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var port = process.env.PORT || 9000;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';

app.get('/ping', function (req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.use(fileUpload());
app.post('/upload', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    console.log(req.files)
    var files = req.files.file;
    if (Array.isArray(files)) {
        console.log("Got " + files.length + " files");
    } else {
        // dropzone will send multiple requests per default
        console.log("Got one file");
    }
    res.sendStatus(200);
});

console.log('** DEV **');
app.use('/', express.static('./src'));
app.use('/', express.static('./'));

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});