'use strict';


// Declare app level module which depends on filters, and services
angular.module('portfolio', [
  'ngRoute',
  'portfolio.filters',
  'portfolio.services',
  'portfolio.directives',
  'portfolio.controllers',
  'duScroll',
  'angular-google-analytics',
  'ngMaterial'
]).value('duScrollOffset', 80)
  .value('duScrollBottomSpy', true)
  .config(['$routeProvider', '$locationProvider', '$httpProvider', 'AnalyticsProvider', '$mdThemingProvider', function ($routeProvider, $locationProvider, $httpProvider, AnalyticsProvider, $mdThemingProvider) {
    $routeProvider.when('/projects', {
      templateUrl: 'partials/projects.html', controller: 'projectListCtrl'
    });
    $routeProvider.when('/corewar', { templateUrl: 'partials/core-war.html', controller: 'projectCtrl' }); $routeProvider.when('/easyfurniture', { templateUrl: 'partials/easyfurniture.html', controller: 'projectCtrl' });
    $routeProvider.when('/contact', { templateUrl: 'partials/contact.html', controller: 'contactCtrl' });
    $routeProvider.when('/', { templateUrl: 'partials/about.html', controller: 'aboutCtrl' });
    $routeProvider.when('/climb', { templateUrl: 'partials/climb.html', controller: 'projectCtrl' });
    $routeProvider.when('/ardriving', { templateUrl: 'partials/ardriving.html', controller: 'projectCtrl' });
    $routeProvider.when('/uxconsulting', { templateUrl: 'partials/ux-consulting.html', controller: 'projectCtrl' });
    $routeProvider.when('/fun', { templateUrl: 'partials/fun.html', controller: 'funCtrl' });
    $routeProvider.otherwise({ redirectTo: '/error', templateUrl: 'partials/error.html', controller: 'errorCtrl' });

    $locationProvider.html5Mode(true);
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    // $mdThemingProvider.theme('default')
    // .primaryPalette('indigo')
    // $mdThemingProvider.alwaysWatchTheme(true);

    AnalyticsProvider.setAccount('UA-112843212-1');
  }]).run(['Analytics', function (Analytics) { }]);

