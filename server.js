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
})
