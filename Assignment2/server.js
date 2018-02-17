var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();
server.on('request', function(req,res) {
    console.log('request:', req.url);

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
    else {
        res.writeHead(404);
        var error = fs.readFileSync('./404.html');
        res.write(error);
        console.log('Page not found');
    }
    res.end();
});

server.listen(8080);
console.log('Magic is happening on port 8080');
