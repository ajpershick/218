// users-api

var express = require('express');
var app = express();
var serverIndex = require('serve-index');
var http = require('http');

var port = process.env.PORT || 3000;
var users = [];

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm','html'],
    index: "start.html"
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

app.get('/users-api', {
    // serve users as json

});

http.createServer(app).listen(port);
