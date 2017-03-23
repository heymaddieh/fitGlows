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
  },

  numWorkout: function(req, res, next){
    //console.log(req.body)
    db.workoutTable([req.body.numWallPush, req.body.numDoorPull, req.body.numDeadBugs, req.body.numWallHipHinge, req.body.numGluteBridges], function(err, data){
      if(err){
        return console.log(err);
      } else {
        db.getWoSummary(function(err, data){
          if(err){
            return console.log(err);
          } else {
            res.send(data[0])
          }
        })
      }
    })
  }
}

// [req.body.age,req.body.bfPerc, req.body.bmi, req.body.heightCm, req.body.hipCm, req.body.illiacCm, req.body.sex, req.body.waistCm, req.body.weightKg]