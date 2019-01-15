var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var fistName = process.argv[2];
var lastName = process.argv[3];
var document = {
    firstName : fistName,
    lastName : lastName
};


MongoClient.connect(url,function(err,db){
    if(err)return console.log(err);
    var collection = db.collection('docs');
    collection.insert(document,function(err,data){
        console.log(JSON.stringify(document));
        db.close()
    });
});
// console.log(process.argv);