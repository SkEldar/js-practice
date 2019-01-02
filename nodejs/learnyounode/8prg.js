var url = process.argv[2];
var http = require('http');

http.get(url,function(response){
          response.on("data",function(data){
                data = data.toString();
                console.log(data);
          });
});
