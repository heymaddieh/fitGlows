'use strict';

angular.module('fitGlows', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/');

  $stateProvider.state('mainPage', {
    url: '/',
    templateUrl: './js/directives/views/startPage.html'
  }).state('yes', {
    url: '/accountLogin',
    templateUrl: './views/accountLogin.html',
    controller: 'loginCtrl'
  }).state('no', {
    url: '/accountSignup',
    templateUrl: './views/accountSignup.html',
    controller: 'signupCtrl'
  }).state('notSure', {
    url: '/accountLookup',
    templateUrl: './views/accountLookup.html',
    controller: 'lookupCtrl'
  });
});
'use strict';

angular.module('fitGlows').controller('loginCtrl', function ($scope, lookupServ) {
  // $scope.test = "Controller is working";
  // $scope.test1 = lookupServ.test;
});
'use strict';

angular.module('fitGlows').controller('lookupCtrl', function ($scope, accountLookupSrv) {});
'use strict';

angular.module('fitGlows').controller('signupCtrl', function ($scope, signupServ) {
  // $scope.test = "Controller is working";
  // $scope.test2 = signupServ.test;
});
'use strict';

angular.module('fitGlows').service('lookupServ', function () {
  // this.test = "Service is working";
});
'use strict';

angular.module('fitGlows').service('accountLookupSrv', function () {});
'use strict';

angular.module('fitGlows').service('signupServ', function () {
  // this.test = 'Service is working'
});
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