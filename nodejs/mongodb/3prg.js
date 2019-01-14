var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var first = parseInt(process.argv[2]);


mongo.connect(url,function(err,db){
    if(err) return console.log(err);
        db.collection('parrots').find({ age: { $gt: 3 } }).toArray(function(err,docs){
            console.log(docs);
            db.close();
        });
});
