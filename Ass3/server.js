const express = require('express');
const app = express();
const port = 5000;

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm','html'],
    index: "index.html"
};

app.use('/', function(req,res,next){
    console.log(req.method, 'request:', req.url, JSON.stringify(req.body));
    next();
});

app.use('/', express.static('./pub_html', options));

app.listen(port, function () {
    console.log('Server listening on port 5000!');
});
