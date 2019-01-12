var express = require('express');
    app = express();
    port = process.argv[2];
    // crypto = require('crypto');

app.put('/message/:id',function(req,res){
//creating SHA-1 id
var id = req.params.id;
var sha1 = require('crypto');
sha1 = sha1.createHash('sha1');
sha1 = sha1.update(new Date().toDateString() + id);
sha1 = sha1.digest('hex');

res.send(sha1);
});

app.listen(port);
