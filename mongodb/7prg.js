var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url,function(err,db){
    if(err) return console.log(err);
    var collection = db.collection('keys');
    collection.remove({
        name : 'blah'
    },function(err){
        if(err) return console.log(err);
        db.close();
    });
});
// 'learnyoumongo',
//   'keys',
//   '554a655c0639034860349353' ]