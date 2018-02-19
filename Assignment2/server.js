var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var arr = [];

var server = http.createServer();
server.on('request', function(req,res) {

    console.log('request:', req.url);
    if (req.method === 'GET') {

        if (req.url === '/') {
            var formPath = path.join(__dirname,'/form.html');
            var formStream = fs.createReadStream(formPath, { highWaterMark: 1024 });
            res.writeHead(200, {"Content-Type": "text/html"});
            formStream.pipe(res);
        }
        else if (req.url === '/form.css') {
            var cssPath = path.join(__dirname,req.url);
            var cssStream = fs.createReadStream(cssPath, { highWaterMark: 1024 });
            res.writeHead(200, {"Content-Type": "text/css"});
            cssStream.pipe(res);
        }
        else if (req.url === '/form.js') {
            var jsPath = path.join(__dirname,req.url);
            var jsStream = fs.createReadStream(jsPath, { highWaterMark: 1024 });
            res.writeHead(200, {"Content-Type": "application/javascript"});
            jsStream.pipe(res);
        }
        else if (req.url === '/data/users.json') {
            var usersPath = path.join(__dirname,'/data/users.json');
            fs.exists(usersPath, function(exists) {
                if (!exists) {
                    jsonobject = JSON.stringify(arr);
                    fs.writeFile(usersPath, jsonobject, function (err) {
                        if (err) throw err;
                    });
                }
            });

            var jsonPath = path.join(__dirname,req.url);
            var jsonStream = fs.createReadStream(jsonPath, { highWaterMark: 1024 });
            res.writeHead(200, {"Content-Type": "application/json"});
            jsonStream.pipe(res);
        }

        else if (req.url === '/users.html') {
            var userPath = path.join(__dirname,req.url);
            var userStream = fs.createReadStream(userPath, { highWaterMark: 1024 });
            res.writeHead(200, {"Content-Type": "text/html"});
            userStream.pipe(res);
        }

        else {
            res.writeHead(404);
            res.write('<h1>404 Error: Page Not Found</h1>');
            res.end();
        }
    }

    else if (req.method === 'POST' && req.url === '/'){
        var usersPath = path.join(__dirname,'/data/users.json');
        var body ='';
        req.on('data', function(data){
            body += data.toString();
            res.redirect('/UserHomePage');
            res.end();
        });
        req.on('end', function(){
            var postObj = qs.parse(body);
            console.log(postObj);
            console.log(arr);
            arr.push(postObj);
            jsonarray = JSON.stringify(arr);
            fs.writeFile(usersPath, jsonarray, function (err) {
                if (err) throw err;
                res.end();
            });
        });
        res.end();
    }
    else {
        res.writeHead(404);
        res.write('<h1>404 Error: Page Not Found</h1>');
        res.end();
    }

});

server.listen(23734);
console.log('Magic is happening on port 23734');
