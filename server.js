const express = require('express');
const server = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if(err) {
    console.log(err);
    return;
  }
  const db = client.db("potatoes");
  console.log("Connected to database");

server.post('/api/potatoes', function(req, res) {

  db.collection('potatoes').insert(req.body, function(err, result) {
    if(err) {
      console.log(err);
      res.status(500);
      res.send();
      return;
    }
    console.log('Saved to database');
    res.status(201);
    res.json(result.ops[0]);
    });
  });

  



});


server.listen(3000, function(){
  console.log("Listening on port 3000");
  });
