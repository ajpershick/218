var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();
server.on('request', function(req,res){
    console.log('request:', req.url);
    if (req.url.match(/^\/.+\.html$/)){
        var filepath = path.join(__dirname,req.url);

        fs.readFile(filepath, function(err, contents){
            if(err){
                // handle error
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(contents);
            }
        });
    }
    else if (req.url === '/image.jpg'){
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        var contents = fs.readFileSync('./image.jpg');
        res.write(contents);
    }
    else {
        res.writeHead(404);
        res.write('404 Error');
        console.log('error goes here.');
    }
    res.end();
});

server.listen(8080);
console.log('Magic is happening on port 8080');
