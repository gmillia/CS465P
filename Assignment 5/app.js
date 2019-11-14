const express = require('express');
const app = express();
const session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

/*
Serve main page as a form page
*/
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/submit', function(req, res) {
    var response = "name: " + req.body.name + '<br>';
    response += "email: " + req.body.email + '<br>';
    response += "comment" + req.body.comment;
    res.send(response);
})

app.listen(3000, function() {
    console.log("Server running");
})