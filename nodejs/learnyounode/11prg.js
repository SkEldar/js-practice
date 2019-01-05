var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = fs.createReadStream(process.argv[3]);

var server = http.createServer(function(request,response){
console.log(file)
});

server.listen(port);
