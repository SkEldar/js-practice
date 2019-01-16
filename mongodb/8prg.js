var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url,function(err,db){
        if(err) return console.log(err);
        var collection = db.collection('parrots');
        collection.count({
            age : { $gt : 3 }
        },function(err,docs){
                if(err) return console.log(err);
                console.log(docs);
                db.close();
        });
});