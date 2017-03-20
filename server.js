var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var massive = require('massive');
var config = require('./config.js');

var app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static('./'));

var port = 4545;

var db = massive.connectSync({connectionString : config.conString})
  app.set('db', db)

var serverCtrl = require('./serverCtrl.js')


db.seed(function(err){
  if(err) return console.log(err)
  else return console.log('table reset')
}) 


app.post('/save_user_input', serverCtrl.saveUserInput)

app.listen(port, function(){
  console.log('listening on port', port)
  console.log("these are words, and more words");
});



//comment somethinglive