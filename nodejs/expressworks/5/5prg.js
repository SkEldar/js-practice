var express = require('express');
    app = express();
    port = process.argv[2];
    // files = process.agrv[3];

app.get('/',function(req,res){
        app.use(express.static( || path.join(__dirname, '5')));
});

app.listen(port);
