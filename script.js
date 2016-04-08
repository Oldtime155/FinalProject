var myApp = angular.module("myApp", ["firebase"]); 
myApp.controller("workoutController", ["$scope", "$firebaseArray", function($scope, $firebaseArray) { 
	var ref = new Firebase("https://myworkoutbuilder.firebaseio.com/"); 
	$scope.myworkout = $firebaseArray(ref); 
	$scope.update = function(user) { 
		var newworkout = {from:user.name || "anonymous",theFirst:user.liftOne,theSecond:user.liftTwo,theThird:user.liftThree,theFourth:user.liftFour}; 
		console.log(newworkout); 
		$scope.myworkout.$add(newworkout); 
		user.liftOne = ""; 
		user.liftTwo = "";
		user.liftThree = "";
		user.liftFour = "";
		
		} 
	} 
]); 