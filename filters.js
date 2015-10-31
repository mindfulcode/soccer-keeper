/** Filters */
(function() {
  
  'use strict';

  /**
   * @name leadingZero
   * 
   * @description
   * Pads a number with leading zeros to ensure a certain length. 
   * 
   * @param {number} input - Number to be formatted
   * @param {number} digits - Length of zero padded number. Defaults to 2
   * @returns {string} 
   * 
   * @example
   * {{value|leadingzeros}} or {{value|leadingzeros:digits=3}}
   */
  var leadingZeros = function() {
    return function(input, digits) {
      digits = digits || 2;
      var result = input.toString();
      while (result.length < digits) {
        result = '0' + result;
      }
      return result;
    };
  };
  
  angular.module('soccerApp')
    .filter('leadingzeros', leadingZeros); 
    
})();
