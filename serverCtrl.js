var app = require('./server.js');
var db = app.get('db');

module.exports = {
  saveUserInput: function(req, res, next){
    console.log(typeof req.body.bfPerc)
    db.initialUserData([req.body.age,req.body.bfPerc, req.body.bmi, req.body.heightCm, req.body.hipCm, req.body.illiacCm, req.body.sex, req.body.waistCm, req.body.weightKg], function(err, data){
      if(err){
        return console.log(err);
      } else {
        res.send('OK');
      }
    })
  }
}

// [req.body.age,req.body.bfPerc, req.body.bmi, req.body.heightCm, req.body.hipCm, req.body.illiacCm, req.body.sex, req.body.waistCm, req.body.weightKg]