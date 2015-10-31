/** Controllers */
(function() {
  
  'use strict';
  angular.module('soccerApp', []);

  /** 
   * Controller for Soccer App
   */   
  var controller = function($scope) {
    
    /* scope interface */
    $scope.minutes = 0;
    $scope.seconds = 0;
    $scope.scorethem = 0;
    $scope.scoreus = 0;
    $scope.bumpscore = bumpscore;
    $scope.resettime = resettime;
    $scope.bumpminutes = bumpminutes;
    $scope.bumpseconds = bumpseconds;
    
    resettime();
    
    function bumpscore(score, delta) {
      $scope[score] = $scope[score] + delta;
      if ($scope[score]<0) {
        $scope[score] = 0;
      }
    };
    
    function bumpminutes(delta) {
      $scope.minutes = ($scope.minutes + delta) % 60; 
    }
    
    function bumpseconds(delta) {
      $scope.seconds = ($scope.seconds + delta) % 60; 
    }
    
    function resettime() {
      $scope.minutes = 25;
      $scope.seconds = 0;
    }
    
  };
  
  angular.module('soccerApp')
    .controller('SoccerController', ['$scope', controller]); 

})();
