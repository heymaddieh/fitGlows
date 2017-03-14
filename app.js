angular.module('fitGlows', [])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/')

    $stateProvider
      .state('yes', {
        url: '/accountLookup',
        templateUrl: './views/accountLookup.html',
        controller: './js/controllers/accountLookupController.js'
      })
  })