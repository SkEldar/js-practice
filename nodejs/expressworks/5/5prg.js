var express = require('express');
    app = express();
    app.use(require('stylus').middleware(process.argv[3]));
    port = process.argv[2];


app.listen(port);
