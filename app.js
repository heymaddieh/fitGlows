angular.module('fitGlows', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/')

    $stateProvider
      .state('mainPage', {
        url: '/',
        templateUrl: './js/directives/views/startPage.html'
      })

      .state('yes', {
        url: '/accountLogin',
        templateUrl: './views/accountLogin.html',
        controller: 'loginCtrl'
      })

      .state('no', {
        url: '/accountSignup',
        templateUrl: './views/accountSignup.html',
        controller: 'signupCtrl'
      })

      .state('notSure', {
        url: '/accountLookup',
        templateUrl: './views/accountLookup.html',
        controller: 'lookupCtrl'
      })
  })