angular.module('fitGlows').controller('userInfoCtrl', function($scope, calcSrv, dataSrv){
  //console.log('hi')
  $scope.calculate = function(input){
    $scope.userInfo = calcSrv.bodyFatPercentage(input)
    console.log($scope.userInfo);

    dataSrv.postAfterCalc($scope.userInfo).then(function(response){
      console.log(response);
    });
  }
  
  
})