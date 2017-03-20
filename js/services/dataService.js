angular.module('fitGlows').service('dataSrv', function($http){

  this.postAfterCalc = function(userInfo){
    return $http.post('/post_after_calc', userInfo).then(function(response){
      if(response.status === 200){
        console.log(response)
        return response;
      }
      return "This is embarassing."
    })
  }
  
})