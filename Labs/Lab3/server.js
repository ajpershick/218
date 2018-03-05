var http = require('http');
var port = 8080; 
var fs = require('fs'); 
var server = http.createServer(); 
server.on('request', function(req,res){ 

	if (req.url === '/image.jpg'){
		var img = fs.readFileSync('./image.jpg');
		res.writeHead(200, {"Content-Type": "image/jpg"});  
		res.write(img);
	}
	else if (req.url === '/index.html' || req.url === '/') {
		var html = fs.readFileSync('./index.html');
		res.writeHead(200, {"Content-Type": "text/html"});  
		res.write(html);
	}
	else {
		var err = fs.readFileSync('./404.html');
		res.writeHead(404, {"Content-Type": "text/html"});  
		res.write(err);
	}
	res.end()
}); 
server.listen(port); 
console.log('Magic is happening on port 8080');
