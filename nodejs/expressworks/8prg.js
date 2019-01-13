var express = require('express');
    app = express();
    port = process.argv[2];
    file = process.argv[3];
    fs = require('fs');

    app.get('/books',function(req,res){
        var out = fs.readFile(file,function(err,data){
            if(err) return err;
            data = JSON.parse(data);
             res.json(data);
        });

  });


app.listen(port);
