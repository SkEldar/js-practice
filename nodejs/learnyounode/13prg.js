var http = require('http');
    port = process.argv[2];
    var url = require('url');
function parsetime(time) {
return {
  hour: time.getHours(),
     minute: time.getMinutes(),
    second: time.getSeconds()
  };
};
function unix(time) {
      return {unixtime : time.getTime() };
};

var server = http.createServer(function(req,res){
var parse = url.parse(req.url, true);
var time = new Date((parse.query.iso));
var result;
if (/^\/api\/parsetime/.test(req.url)) {
     result = parsetime(time)
   } else if (/^\/api\/unixtime/.test(req.url)) {
     result = unix(time)
  }
  if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
 }
});

server.listen(port);
