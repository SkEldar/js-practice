var express = require('express');
    app = express();
    body-parser = require('body-parser');
    port = process.argv[2];

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.urlencoded({extended: false}))
