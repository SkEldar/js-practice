var url = process.argv[2];
var http = require('http');

http.get(url,function(response){
  var res = "";
  response.setEncoding('utf-8');
          response.on("data",function(data){
                      res += data;
          });
          response.on("end",function(){
              console.log(res.length);
              console.log(res);
          });
});
