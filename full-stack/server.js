var express = require('express');
const cors = require('cors');
    app = express();
    obj = {
        "obj1" : { title: 'Express.js Guide',
        tags: [ 'node.js', 'express.js' ],
        url: 'http://expressjsguide.com' },
        "obj2" :   { title: 'Rapid Prototyping with JS',
        tags: [ 'backbone.js', 'node.js', 'mongodb' ],
        url: 'http://rpjs.co' },
        "obj3" :  { title: 'JavaScript: The Good Parts', tags: [ 'javascript' ] }
    };


    // data = JSON.parse(data);
    // res.json(data);

app.get('/books',cors(),function(req,res){
    // obj = JSON.parse(obj);
     res.json(obj);
});

app.listen(5000);