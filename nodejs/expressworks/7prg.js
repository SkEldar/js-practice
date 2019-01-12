var express = require('express');
    app = express();
    port = process.argv[2];

app.get('/search',function(req,res){
        var out = req.query;
        res.send(out);
});

app.listen(port);
