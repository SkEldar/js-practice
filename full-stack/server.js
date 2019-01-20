var express = require('express');
const cors = require('cors');
var mongo = require('mongodb').MongoClient;
var globalDB;
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

mongo.connect('mongodb://localhost:27017/books',cors(),function(err,db){
   globalDB = db;
        if(err) return console.log(err);
        globalDB.collection('books').insert(obj,function(err,data){
            if(err) return console.log(err);    
            console.log(data);
        });
});
app.get('/books',cors(),function(req,res){
        globalDB.collection('books').find().toArray(function(err,docs){
            if(err) return console.log(err);
             var obj1 = docs[0].obj1;
             var obj2 = docs[0].obj2;
             var obj3 = docs[0].obj3;
            //  console.log(obj1)
            for(var i = 0; i < 3; i++) {
                res.json(obj[i]);
            };
                });
});

app.listen(5000)