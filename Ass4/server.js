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

let userSchema = new Schema({
  username: {type: String},
  password: {type: String},
});

let User = mongoose.model('user', userSchema);

app.use('/', function(req,res,next){
  console.log(req.method, 'request:', req.url, (req.body));
  next();
});

app.use('/', express.static('./pub_html', options));

app.post('/login', function(req, res){
  res.end();
});

app.post('/register', function(req, res){
  let newUser = new User({username: req.body.username, password: req.body.password});
  console.log(newUser);
  newUser.save();
  res.end();
});

app.listen(port, function () {
  console.log('Server listening on port 23734!');
});

