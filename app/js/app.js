'use strict';


// Declare app level module which depends on filters, and services
angular.module('portfolio', [
  'ngRoute',
  'portfolio.filters',
  'portfolio.services',
  'portfolio.directives',
  'portfolio.controllers'
]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/projects.html', controller: 'projectListCtrl'
    });
    $routeProvider.when('/corewar', { templateUrl: 'partials/core-war.html', controller: 'projectCtrl' });
    $routeProvider.when('/contact', { templateUrl: 'partials/contact.html', controller: 'contactCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });
  }])


