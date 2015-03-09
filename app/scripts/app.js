'use strict';

/**
 * @ngdoc overview
 * @name toDoApp
 * @description
 * # toDoApp
 *
 * Main module of the application.
 */
var app = angular.module('toDoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  app.config(function($routeProvider, $locationProvider) {
    //get links working
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '/partials/active.html',
        controller: 'MainCtrl'
      })

      .when('/completed', {
        templateUrl: '/partials/completed.html',
        controller: 'MainCtrl'
      })

      .when('/expired', {
        templateUrl: 'partials/expired.html',
        controller: 'MainCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

  app.controller('MainCtrl', ['$scope', function($scope, $routeParams) {
    $scope.name = 'MainCtrl';
    $scope.params = $routeParams;
  }])

var myFirebaseRef = new Firebase("https://incandescent-torch-5461.firebaseio.com");
  myFirebaseRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });