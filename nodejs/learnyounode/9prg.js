var http = require('http');
var urls = [];
var count = 0;
var result = {};
for(var x = 2; x < process.argv.length;x++) {
          urls.push(process.argv[x]);
};
    var res = "";
function check(url,callback) {
    http.get(url,function(response){
          response.setEncoding('utf-8');
          response.on("data",function(data){
            count++;
            res += data;
          });
            response.on("end",function(){
                console.log(1);
                callback();
            });
        });
    };
    check(res,function(){
          function last(urls[3],function(){
                        
          });
    });
    foo("hello", function() {
     foo("1", function() {
      foo("2", function() {
       //more stuff
      });
     }
    )})
