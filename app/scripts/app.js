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
    'ngTouch',
    'firebase'
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

  app.controller('MainCtrl', ['$scope', 'DataProvider', function($scope, $routeProvider, DataProvider) {
    $scope.priority = null;
    $scope.setPriority = function (priority) {
      console.log("Setting priority to ", priority);
      $scope.priority = priority;
    };

    $scope.addTask = function() {
      console.log('adding task');
      $scope.tasks.$add({
        task: $scope.newTaskText,
        priority: $scope.priority,
        completed: false
      });
      $scope.priority = null;
    };

    $scope.markComplete = function(task) {
      // this prints the id of the specific task we want to mark complete
      console.log(task.$id);
      var ref = new Firebase("https://incandescent-torch-5461.firebaseio.com/test");
      var taskRef = ref.child(task.$id);
      taskRef.update({
         completed: true
       });
    }
  }])

  // define a service to pull in data from Firebase
  app.service('DataProvider', function($rootScope, $firebaseArray) {
    var ref = new Firebase("https://incandescent-torch-5461.firebaseio.com/test");
    $rootScope.tasks = $firebaseArray(ref);
  })