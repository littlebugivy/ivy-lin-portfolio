'use strict';

/* Controllers */
function activate(presentp) {
  angular.element(document.querySelector('#projects')).removeClass('active');
  angular.element(document.querySelector('#contact')).removeClass('active');
  angular.element(document.querySelector('#about')).removeClass('active');
  angular.element(document.querySelector('#' + presentp)).addClass('active');
}

angular.module('portfolio.controllers', []).
  controller('projectListCtrl', ['$window', '$scope', function ($window, $scope) {
    activate('projects');
    console.log('here is the project controller')
    angular.element(document.querySelector(".main-menu")).removeClass("invisible");
  }]).
  controller('contactCtrl', ['$window', '$scope', function ($window, $scope) {
    console.log('here is the contact controller')
    activate('contact');

    // the regular expression is copied online
    $scope.validateEmail = function () {
      $('.ui.form').form({
        fields: {
          email: {
            identifier: 'email',
            rules: [{
              type: 'regExp',
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              prompt: 'Invalid email address'
            }]
          }
        }
      });
    }
    angular.element(document.querySelector(".main-menu")).removeClass("invisible");
  }]).
  controller('aboutCtrl', ['$window', '$scope', function ($window, $scope) {
    activate('about');
    var feed = new Instafeed({
      get: 'user',
      userId: '1178140746',
      accessToken: '1178140746.1677ed0.3e958d1dc8344e14b997d86016374ef5',
      limit: 12,
      sortBy: 'most-recent',
      template: '<div class="gallery"><a href="{{image}}" title="{{caption}}"><img src="{{image}}" class="img-fluid"></a></div>'
    });
    feed.run();
    console.log('here is the about controller')
  }]).
  controller('projectCtrl', ['$window', '$scope', '$location', '$anchorScroll', '$rootScope', function ($window, $scope, $location, $anchorScroll, $rootScope) {
    activate('projects');
    $scope.hideMainMenu = false;
    $scope.showSideNav = false;
    $scope.caption = "Premiere of Climb!"
    $scope.slide = 1;

    console.log('here is the project list controller')

    var slideIndex = 1;

    $scope.plusDivs = function (n) {
      $scope.showDivs(slideIndex += n);
    }

    $scope.currentDiv = function (n) {
      $scope.showDivs(slideIndex = n);
      $scope.slide = n;
      if (n === 1) {
        $scope.caption = "Premiere of Climb!"
      } else if (n == 2) {
        $scope.caption = "Mobile app for Climb!"
      } else if (n == 3) {
        $scope.caption = "Disklavier piano"
      } else {
        $scope.caption = "Disklavier piano autoplay"
      }
    }

    $scope.climbReplace = function (n) {
      if (n == 1) {
        $scope.programmenote = "img/climb/programmenote.png"
      } else if (n == 2) {
        $scope.mapoverview = "img/climb/mapoverview2.png"
      } else if (n == 3) {
        $scope.journey = "img/climb/journey2.png"
      } else {
        $scope.compare = "img/climb/compare2.png"
      }
    }

    $scope.reset = function () {
      $scope.programmenote = "img/climb/interface.png"
      $scope.mapoverview = "img/climb/mapoverview1.png"
      $scope.journey = "img/climb/journey1.png"
      $scope.compare = "img/climb/compare1.png"
    }

    $scope.reset();

    // image slider
    // copied from w3 school 
    $scope.showDivs = function (n) {
      var i;
      var x = document.getElementsByClassName("slides");
      var dots = document.getElementsByClassName("image-slider");
      if (n > x.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = x.length }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("w3-hover-opacity-off", "");
      }
      x[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += "w3-opacity";
    }

    $scope.showDivs(slideIndex);
    $scope.goToMainPage = function () {
      $window.location.href = '#/projects.html';
    }

    var lock = 0;
    $scope.showNavTitle = function () {
      $scope.mouseover = true;
      if (lock === 0) {
        $('.nav-title')
          .transition('fade');
        lock = 1;
      }
    }

    $scope.hideNavTitle = function () {
      $scope.mouseover = false;
      if (lock === 1) {
        $('.nav-title')
          .transition('fade');
        lock = 0;
      }
    }

    // shrink nav bar when user scroll down
    angular.element($window).bind('scroll', function () {
      var offset = this.pageYOffset;
      var showSideNav = $scope.showSideNav;
      var hideMainMenu = $scope.hideMainMenu;
      if (offset >= 300) {
        if (hideMainMenu === false) {
          $('.shrink-menu')
            .transition('fade');
          angular.element(document.querySelector(".main-menu")).addClass("invisible");
          $scope.hideMainMenu = true
        }
        if (showSideNav === false) {
          $('.side-menu')
            .transition('fade right');
        }
        $scope.showSideNav = true;
      }
      $scope.$apply()
    })
  }])

