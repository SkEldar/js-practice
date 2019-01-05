var http = require('http');
var urls = [];
var count = 0;
var result = {};
for(var x = 2; x < process.argv.length;x++) {
          urls.push(process.argv[x]);
};

function check(url,callback) {
  var res = "";
    http.get(url,function(response){
          response.setEncoding('utf-8');
          response.on("data",function(data){
            count++;
            res += data;
          });
            response.on("end",function(){
                console.log(res);
                callback();
            });
        });
    };
    check(urls[0],function(){
            check(urls[1],function(){
                check(urls[2],function(){
                        //end
                });
            });
    });
