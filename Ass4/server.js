"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 23734;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm','html'],
  index: "index.html"
};

// const MongoClient = require('mongodb').MongoClient;
//
// const url = "mongodb://localhost";
//
// MongoClient.connect(url, function(err, client){
//     if (err) console.log(err);
//     //console.log('connected');
//     let database = client.db('Ass3DB'); // use
//     let collection = database.collection('documents'); // db.documents
//     collection.insertMany([{a:1,b:2},{a:3,b:4}], function(err, result){
//         collection.find().forEach(function(mydoc){
//             console.log(mydoc);
//         });
//     });
// });


/////// Connecting to Mongoose ////////
///////////////////////////////////////

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost');
let db = mongoose.connection;

//db.on('error', function(){});
db.once('open', function(){
    console.log('connection success');
});

// Schema is a constructor
let Schema = mongoose.Schema;
// instantiate the constructor

let sessionSchema = new Schema({
    active: { type:Boolean },
});
// create a new model
let Session = mongoose.model('session', sessionSchema);

let session = new Session({active: false});
// session.save();

app.use('/', function(req,res,next){
  console.log(req.method, 'request:', req.url, (req.body));
  next();
});

app.use('/', express.static('./pub_html', options));

app.post('/login', function(req, res){
  res.end();
});

app.post('/eventStart', function(req, res){
  checkIn_ID = req.body.checkIn_ID;
  eventStatus = true;
  eventID++;
  res.end();
});

app.listen(port, function () {
  console.log('Server listening on port 23734!');
});

