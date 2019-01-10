var port = process.argv[2];
    express = require('express');
    app = express();

app.get('/home',function(req,res){
      res.send('Hello World!');
});

app.listen(port);
