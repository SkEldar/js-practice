// var express = require('express');
//     app = express();
//     app.use(require('stylus').middleware(process.argv[3]));
//     port = process.argv[2];
//     app.use(express.static());
// app.listen(port);
var express = require('express');

var app = express();
var port = process.argv[2];

app.use(express.static(__dirname + '/public'));
app.listen(port);
