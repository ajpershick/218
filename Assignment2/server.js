var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');

var server = http.createServer();
server.on('request', function(req,res) {

    console.log('request:', req.url);

//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         //var formStream = fs.createReadStream('./form.html');
//         //console.log('created stream');
//         //formStream.on('open', function() {
//         //    formStream.pipe(res);
//         //});
//         var form = fs.readFileSync('./form.html');
//         res.write(form);
//     }
//     if (req.method === 'GET' && req.url === '')
//     else {
//         res.writeHead(404);
//         var error = fs.readFileSync('./404.html');
//         res.write(error);
//         console.log('Page not found');
//     }
//     res.end();
// });
    var urlObj = url.parse(req.url, true); // true => query turned into an obj
    console.log(urlObj.query.lname);
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        //var formStream = fs.createReadStream('./form.html');
        //console.log('created stream');
        //formStream.on('open', function() {
        //    formStream.pipe(res);
        //});
        var form = fs.readFileSync('./form.html');
        res.write(form);
    }
    else if (req.method === 'GET' && req.url.match(/^\/.+\.html$/)) {
        var filepath = path.join(__dirname, req.url);
        fs.readFile(filepath, function (err, contents) {
            if (err) {
                throw err;
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(contents);
                res.end();
            }
        });

    } //else if (req.method === 'GET' && req.url.match(/^\/.+\.js$/)) {
    //     var jspath = path.join(__dirname, req.url);
    //
    //     fs.readFile(jspath, function (err, contents) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             res.writeHead(200, {"Content-Type": "text/javascript"});
    //             res.write(contents);
    //             res.end();
    //         }
    //     });
    // }
});

server.listen(8080);
console.log('Magic is happening on port 8080');
