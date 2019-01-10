var express = require('express');
    app = express();
    bodyparser = require('body-parser');
    port = process.argv[2];

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form',function(req,res){
        var val = req.body.str.split('').reverse().join('');
        res.send(val);
        //console.log(val);
});

app.listen(port);
