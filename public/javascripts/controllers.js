angular.module('ForceRevivalApp.controllers', []).
  controller('MainCtrl', [
    '$scope',
    'SpookyStart',
    'SpookyStop',
    'ImageFactory',
    mainCtrl
  ]);

function mainCtrl($scope, SpookyStart, SpookyStop, ImageFactory) {
  'use strict';

  $scope.text = 'Welcome AngularJS';

  ImageFactory.get({site: 'accounts'});

  $scope.startSpooky = function() {
    SpookyStart.get(function() {
    });
  };

  $scope.stopSpooky = function() {
    SpookyStop.get(function() {
    });
  };
}
