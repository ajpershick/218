const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
let adminUsername = 'admin';
let adminPassword = '1234';
let checkIns = [];

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

mongoose.connect("mongodb://localhost/Ass3DB");
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
  console.log(sessions);
});

app.use('/', function(req,res,next){
  console.log(req.method, 'request:', req.url, (req.body));
  next();
});

app.use('/', express.static('./pub_html', options));

app.post('/login', function(req, res){
  logInValidation();
  res.end();
});

app.post('/checking', function(req, res){
  res.end();
});

app.post('/checkIns', function(req, res){
  res.end();
});

app.listen(port, function () {
  console.log('Server listening on port 5000!');
});

function logInValidation(username, password){
}
