var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 3000;

var morgan = require('morgan');
var bodyParser = require('body-parser');
 
var app = express();
app.use(morgan());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view options", {
    layout: false
});
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('public/index.html');
});
 
app.listen(port);
console.log('Express server running at http://localhost:' + port);
