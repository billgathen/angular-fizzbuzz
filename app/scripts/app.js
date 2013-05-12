'use strict';

angular.module('mainApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/text.html',
        controller: 'MainCtrl'
      })
      .when('/html', {
        templateUrl: 'views/html.html',
        controller: 'MainCtrl'
      })
      .when('/json', {
        templateUrl: 'views/json.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
