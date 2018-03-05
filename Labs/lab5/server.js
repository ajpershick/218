// users-api

const express = require('express');
const app = express();
const serverIndex = require('serve-index');
const http = require('http');
const path = require('path');

var port = process.env.PORT || 3000;
var users = [];

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm','html'],
    index: "form.html"
};

app.use('/', function(req,res,next){
    console.log(req.method, 'request:', req.url);
    next();
});

// app.all('/', function(req,res,next){
//   console.log('Accessing root folder');
//   next();
// });

app.use('/', express.static('./pub_html', options));
app.use('/files', serverIndex('pub_html/files', {'icons': true}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.get('/users-api', function(req,res,next){
    // serve users as json
    res.json(users);
});

app.post('/users-api', function(req,res,next){
    console.log(req.body);
    users.push(req.body);
    res.json(users);
});

http.createServer(app).listen(port);
