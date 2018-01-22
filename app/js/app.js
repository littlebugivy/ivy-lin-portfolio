'use strict';


// Declare app level module which depends on filters, and services
angular.module('portfolio', [
  'ngRoute',
  'portfolio.filters',
  'portfolio.services',
  'portfolio.directives',
  'portfolio.controllers',
  'duScroll'
]).value('duScrollOffset', 80)
  .value('duScrollBottomSpy', true)
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/projects.html', controller: 'projectListCtrl'
    });
    $routeProvider.when('/corewar', { templateUrl: 'partials/core-war.html', controller: 'projectCtrl' }); $routeProvider.when('/easyfurniture', { templateUrl: 'partials/easyfurniture.html', controller: 'projectCtrl' });
    $routeProvider.when('/contact', { templateUrl: 'partials/contact.html', controller: 'contactCtrl' });
    $routeProvider.when('/about', { templateUrl: 'partials/about.html', controller: 'aboutCtrl' });
    $routeProvider.when('/climb', { templateUrl: 'partials/climb.html', controller: 'projectCtrl' });
    $routeProvider.when('/ardriving', { templateUrl: 'partials/ardriving.html', controller: 'projectCtrl' });
    $routeProvider.otherwise({ redirectTo: '/error', templateUrl: 'partials/error.html', });

    $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  }])

