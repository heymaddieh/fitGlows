angular.module('fitGlows').controller('workoutCtrl', function($scope, dataSrv, $rootScope){

  $scope.numWorkout = function(input){
    // console.log(input);
    var addedWorkouts = {
      numWallPush: 
        input.numWallPush1 + input.numWallPush2 + input.numWallPush3,
      numDoorPull: 
        input.numDoorPull1 + input.numDoorPull2 + input.numDoorPull3,
      numDeadBugs: 
        input.numDeadBugs1 + input.numDeadBugs2 + input.numDeadBugs3,
      numWallHipHinge: 
        input.numWallHipHinge1 + input.numWallHipHinge2 + input.numWallHipHinge3, 
      numGluteBridges: 
        input.numGluteBridges1 + input.numGluteBridges2 + input.numGluteBridges3
    }
    dataSrv.numWorkout(addedWorkouts).then(function(response){
      console.log(response.data);
      $rootScope.summary = response.data;
    })

  }

  
})