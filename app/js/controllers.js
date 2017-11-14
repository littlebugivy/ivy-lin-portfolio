'use strict';

/* Controllers */

angular.module('portfolio.controllers', []).
  controller('projectListCtrl', ['$window', '$scope', function ($window, $scope) {
    console.log('here is the project controller')

    angular.element(document.querySelector(".main-menu")).removeClass("invisible");
  }]).
  controller('contactCtrl', ['$window', '$scope', function ($window, $scope) {
    console.log('here is the contact controller')

    // the regular expression is copied online
    $scope.validateEmail = function () {
      $('.ui.form').form({
        fields: {
          email: {
            identifier: 'email',
            rules: [{
              type: 'regExp',
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              prompt : 'Invalid email address'
            }]
          }
        }
      });
    }


    angular.element(document.querySelector(".main-menu")).removeClass("invisible");
  }]).
  controller('projectCtrl', ['$window', '$scope', '$location', '$anchorScroll', function ($window, $scope, $location, $anchorScroll) {
    $scope.hideMainMenu = false;
    $scope.showSideNav = false;
    console.log('here is the project list controller')

    var slideIndex = 1;

    $scope.plusDivs = function (n) {
      $scope.showDivs(slideIndex += n);
    }

    $scope.currentDiv = function (n) {
      $scope.showDivs(slideIndex = n);
    }

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

    $scope.scrollToTop = function scrollToTop() {
      $window.scrollTo(0, 0);
    }

    $scope.goToMainPage = function () {
      $window.location.href = '#/projects.html';
    }

    $scope.scrollTo = function (id) {
      console.log(id);
      $location.hash(id);
      $anchorScroll();
    }

    // shrink nav bar when user scroll down
    angular.element($window).bind('scroll', function () {
      if (this.pageYOffset >= 300) {
        if ($scope.showSideNav === false) {
          $('.side-menu')
            .transition('fade right');
          $scope.showSideNav = true;
        }
      } else {
        if ($scope.showSideNav === true) {
          $scope.showSideNav = false;
          $('.side-menu')
            .transition('fade left');
        }
      }

      if (this.pageYOffset >= 150) {
        if ($scope.hideMainMenu === false) {
          $('.shrink-menu')
            .transition('fade');
          angular.element(document.querySelector(".main-menu")).addClass("invisible");
          $scope.hideMainMenu = true
        }
      }
      $scope.$apply()
    })
  }])

