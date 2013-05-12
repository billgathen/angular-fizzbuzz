/* global _ */
'use strict';

angular.module('mainApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.fizzbuzz = function() {
      if ( invalidNum($scope.lastNum) ) { return []; }
      return _.map(_.range(1,$scope.lastNum+1), function(num) {
        if (num % 15 === 0) { return 'FizzBuzz'; }
        if (num % 3 === 0) { return 'Fizz'; }
        if (num % 5 === 0) { return 'Buzz'; }
        return num;
      });
    };

    var invalidNum = function(num) {
      return (typeof num === 'undefined') || num > 100 || num < 0;
    };
  }]);
