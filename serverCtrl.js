var app = require('./server.js');
var db = app.get('db');

module.exports = {
  saveUserInput: function(req, res, next){
    res.send('Success!')
  }

}