var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket){
  var date = new Date();
  var year,month,day,hours,minutes;
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = '0' + date.getDate();
  hours = date.getHours();
  minutes = date.getMinutes();
    var answer = year + '-' + 0 + month + '-' + day + ' '+  hours + ':' + minutes + '\n';
        socket.end(answer);
        //"2019-01-05 22:27"
});
  server.listen(port);
