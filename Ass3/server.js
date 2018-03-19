const express = require('express');
const app = express();
const port = 5000;

app.get('/', function (req, res) {
    res.send('Home');
});

app.listen(port, function () {
    console.log('Server listening on port 5000!');
});
