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

      .state('beforeWeGetStarted', {
        url: '/beforeWeGetStarted',
        templateUrl: './views/beforeGetStarted.html',
        controller: 'beforeGetStartedCtrl'
      })

      .state('getUserInfo', {
        url: '/userInfo',
        templateUrl: './views/getUserInfo.html',
        controller: 'userInfoCtrl'
      })

      .state('bfPerc', {
        url: '/yourResults',
        templateUrl: './views/bodyFatPerc.html',
        controller: 'userInfoCtrl'
      })

      .state('setGoals', {
        url: '/letsSetGoals',
        templateUrl: './views/setGoals.html',
        controller: 'setGoalsCtrl'
      })

      .state('welcome', {
        url: '/welcome',
        templateUrl: './views/welcome.html'
      })

      .state('warmUp', {
        url: '/warmUp',
        templateUrl: './views/warmUp.html',
        controller: 'warmUpCtrl'
      })

      .state('workout', {
        url: '/workout',
        templateUrl: './views/workout.html',
        controller: 'workoutCtrl'
      })

      .state('workoutSummary', {
        url: '/summary',
        templateUrl: './views/summary.html',
        controller: 'summaryCtrl'
      })
  })