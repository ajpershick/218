"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 23734;
let adminUsername = 'admin';
let adminPassword = '1234';
let checkIns = [];
let eventID = 0;
let eventStatus = false;
let checkIn_ID = '';
let currEvent = '';

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

mongoose.connect('mongodb://localhost:3000/Ass4');
let db = mongoose.connection;

//db.on('error', function(){});
db.once('open', function(){
    console.log('connection success');
});

// Schema is a constructor
let Schema = mongoose.Schema;
// instantiate the constructor
let adminSchema = new Schema({
    username: { type:String },
    password: { type:String, minlength:4 }
});
// create a new model
let Admin = mongoose.model('admin', adminSchema);

let admin1 = new Admin({username: 'admin', password: '1234'});
// admin1.save();

Admin.find(function (err, admins) {
    if (err) return console.error(err);
    // console.log(admins);
});

let sessionSchema = new Schema({
    active: { type:Boolean },
});
// create a new model
let Session = mongoose.model('session', sessionSchema);

let session = new Session({active: false});
// session.save();

Session.find(function (err, sessions) {
  if (err) return console.error(err);
});

let checkInSchema = new Schema({
  string: String,
  name: String,
  userID: String,
  eventID: String,
});

let checkIn = mongoose.model('checkIns', checkInSchema);

app.use('/', function(req,res,next){
  console.log(req.method, 'request:', req.url, (req.body));
  next();
});

app.use('/', express.static('./pub_html', options));

app.get('/eventStatus', function(req, res){
  console.log(eventStatus);
  res.send(eventStatus);
  res.end()
});

app.post('/login', function(req, res){
  logInValidation();
  res.end();
});

app.post('/eventStart', function(req, res){
  checkIn_ID = req.body.checkIn_ID;
  eventStatus = true;
  eventID++;
  res.end();
});

app.post('/stopEvent', function(req, res){
  eventStatus = false;
  res.end();
});

app.post('/checkIns', function(req, res){
  // checkIns.push(req.body);
  // console.log(checkIns);
  let newCheckIn = new checkIn({string: req.body.string, name: req.body.name, userID: req.body.userID, eventID: eventID });
  console.log(newCheckIn);
  newCheckIn.save();
  res.end();
});

app.get('/eventAttendees', function(req, res){
  checkIn.find({eventID: eventID}, function (err, attendees) {
    if (err) return console.error(err);
    res.send(attendees);
  });
});

app.post('/history', function(req, res){
  checkIn.find({string: req.body.checkIn_ID}, function (err, history) {
    if (err) return console.error(err);
    console.log(history);
    res.send(history);
  });
});

app.listen(port, function () {
  console.log('Server listening on port 23734!');
});

function logInValidation(username, password){
}
