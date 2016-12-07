
var app = angular.module('TestApp', ['ngAnimate']);

app.controller('TestCtrl', function PhoneListController($scope) {
  $scope.test = []
  $scope.add = function()
  {
	  $scope.test = ["a", "b", "c", "d"]; 
  }
});

app.animation('.slide', [function() {
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
		TweenLite.from(element,
				   0.25,   // duration
				   {   // tween parameters
					   x: 500,
					   opacity: 0
					  
				   });
		doneFn();
								

      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      doneFn();
    },

    leave: function(element, doneFn) {
      doneFn();
    }
  }
}]);
