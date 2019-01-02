var filter = require("./modul.js");

var fl = process.argv[2];
var ext = process.argv[3];

filter(fl,ext,function(err,files){
      if(err) {
          return console.log(err);
      };

      files.forEach(function(file) {
          console.log(file);
      });

});
