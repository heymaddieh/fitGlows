angular.module('fitGlows').controller('loginCtrl', function($scope, $state){
  // $scope.test = "Controller is working";
  // $scope.test1 = lookupServ.test;
  $scope.warmUp = function() {
    $state.go('warmUp')
  }
  
})