var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var port = 4545;

app.listen(port, function(){
  console.log('listening on port', port)
  console.log("these are words, and more words");
});

//comment somethinglive