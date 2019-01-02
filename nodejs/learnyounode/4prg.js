var fs = require('fs');

var file = process.argv[2];
var res = fs.readFile(file,function(err,data){
    if(err) {
      return console.log(err);
    };
    var buf = data;
    buf = buf.toString();
    buf = buf.split('\n');
    return console.log(buf.length - 1);
  });
