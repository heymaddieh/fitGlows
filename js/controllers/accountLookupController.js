angular.module('fitGlows').controller('lookupController', function($scope, lookupServ){
  $scope.test = "Controller is working";
  $scope.test1 = lookupServ;
})