var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var app = express();
var db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

var artists = [
  {
    id : 1,
    name : 'Lil Peep'
  },
  {
    id : 2,
    name : 'Lil Pump'
  },
  {
    id : 3,
    name : 'Lil Yachty'
  }
];

app.get('/' , function(req,res){
    res.send("Hello Word!");
});

app.get('/ar',function(req,res){
db.collection('artists').find().toArray(function(err,docs){
  if(err){
    console.log(err);
    return res.sendStatus(500);
  };
  res.send(docs);
});
});


app.post('/ar',function(req,res){
  var artist = {
    name : req.body.name
  };
db.collection('artists').insert(artist,function(err,rusult){
        if(err){
          console.log(err);
          return res.sendStatus(500);
        };
        res.send(artist);
});
});

app.get('/ansi',function(req,res){
    res.send("HELLO ANSARAAA");
});

app.put('/ar/:id',function(req,res){
db.collection('artists').updateOne({ _id : ObjectID(req.params.id) },{name : req.body.name},function(err,result) {
  if(err){
    console.log(err);
    return res.sendStatus(500);
  };
  res.sendStatus(200);
});
});

 app.get('/ar/:id',function(req,res){
   db.collection('artists').findOne({ _id : ObjectID(req.params.id)},function(err,doc){
      if(err){
         console.log(err);
         res.sendStatus(500);
      };
      res.send(doc);
   });
 });

app.delete('/ar/:id',function(req,res){
  db.collection('artists').deleteOne({ _id : ObjectID(req.params.id )},function(err,result){
      if(err){
        console.log(err);
        return res.sendStatus(500);
      };
      res.sendStatus(200);
  });
});

MongoClient.connect('mongodb://localhost:27017/myapi',function(err,database){
    if(err){
      console.log(err);
    }
    db = database;
    app.listen(7777,function() {
        console.log("API app started");
    });

});
