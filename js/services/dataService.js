angular.module('fitGlows').service('dataSrv', function($http){

  this.postAfterCalc = function(userInfo){
    return $http.post('/post_after_calc', userInfo).then(function(response){
      if(response.status === 200){
        // console.log(response)
        return response;
      }
      return "This is embarassing."
    })
  }

  this.numWorkout = function(input){
   // console.log(input)
    return $http.post('/num_workout', input).then(function(response){
      if(response.status === 200){
        return response;
      }
      return "uh oh"
    })
  }
  
})