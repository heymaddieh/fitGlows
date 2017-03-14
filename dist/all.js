'use strict';

angular.module('fitGlows', []);
// .config(function($stateProvider, $urlRouterProvider){

// $urlRouterProvider.when('', '/')

// $stateProvider
//   .state('start', {
//     url: '/',
//     templateUrl: 'views/startPage.html',
//   })
'use strict';

angular.module('fitGlows').directive('haveAnAcc', function () {
  return {
    restrict: 'EA',
    templateUrl: './js/directives/views/haveAnAcc.html'
  };
});
'use strict';

angular.module('fitGlows').directive('startPage', function () {
  return {
    restrict: 'E',
    templateUrl: './js/directives/views/startPage.html'
  };
});