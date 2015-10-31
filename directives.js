/** Directives */
(function () {

  'use strict';

  /** 
   * appCountdownTime
   * 
   * Attribute directive to control countdown timer
   * 
   * Questionable as to whether it should be a directive, but since it manipulates the DOM
   * and I wanted to practice creating a directive, I chose this design.
   */
  function appCountdownTimer($interval) {
    // TODO: Should this have private scope, so you can use several on the same page?
    function link(scope, element, attrs) {
      var timeoutId;

      function updateTime() {
        scope.seconds = scope.seconds - 1;
        if (scope.seconds < 0) {
          scope.seconds = 59;
          scope.minutes = scope.minutes - 1;
        }
      }
      
      element.on('dblclick', function() {
        scope.seconds = 0;
        scope.minutes = 25;  
        if (timeoutId) {
          $interval.cancel(timeoutId);
          timeoutId = undefined;
        };
      });
      
      element.on('click', function () {
        element.toggleClass('timeisstopped');
        element.toggleClass('timeisrunning');
        if (timeoutId) {
          $interval.cancel(timeoutId);
          timeoutId = undefined;
        } else {
          timeoutId = $interval(function () {
            updateTime(); // update DOM
          }, 1000);
        };
      });

      element.on('$destroy', function () {
        if (timeoutId) {
          $interval.cancel(timeoutId);
        }
      });
    }

    return {
      restrict: "A",
      link: link,
      template: '{{minutes|leadingzeros:digits=2}}:{{seconds|leadingzeros}}'
    };
  };

  angular.module('soccerApp')
    .directive('appCountdownTimer', appCountdownTimer);

})();
