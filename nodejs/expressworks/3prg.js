var express = require('express');
  path = require('path');
    file = process.argv[3];
    app = express();
    app.set('view engine','pug');
    app.set('views',path.join(file));
    port = process.argv[2];



app.get('/home',function(req,res){
res.render('index',{ date: new Date().toDateString() });
});

app.listen(port);
