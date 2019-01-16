var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url,function(err,db){
    if(err) return console.log(err);
    var collection = db.collection('prices');
    collection.aggregate([
        $match : {
            price : price
        }
    },])
});