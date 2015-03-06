'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoApp
 */
angular.module('toDoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
