var mySign = angular.module('mySign', []);
mySign.controller('SubjectDropDownController', function ($scope) {
 
    $scope.subjects = ['General Training', 'Body Building', 'Power Lifting'];
    $scope.selectedItem = 'Workout Type:';
	var myurl = "/theWorkout"
	function getWorkout(index) {
			var url = "../theWorkout"
			$.getJSON(url, function(data) {
				console.log(data[+index].type);
				var benchPress = $("input[name='bench']").val();
				console.log(benchPress);
				var backSquat = $("input[name='squat']").val();
				var deadLift = $("input[name='deadlift']").val();
				var overHead = $("input[name='overhead']").val();
				document.getElementById("workoutGenerated").innerHTML = "Week One<br>";
				document.getElementById("workoutGenerated").innerHTML += "<b>Monday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].setOne + Math.round(benchPress*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].setTwo + Math.round(benchPress*.10) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].setThree + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].setFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Tuesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].secondOne + Math.round(deadLift*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].secondTwo + Math.round(deadLift*.2) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].secondThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].secondFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Wednesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].thirdOne + Math.round(overHead*.7) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].thirdTwo + Math.round(overHead*.3) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].thirdThree + Math.round(overHead*.25) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].thirdFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Friday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthOne + Math.round(benchPress*.65) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthThree + Math.round(benchPress*.10) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthFour + Math.round(benchPress*.10) +"<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Saturday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fiveOne + Math.round(backSquat*.7) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fiveTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fiveThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fiveFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Sunday:</b> Rest Day<br><br>";
				
				document.getElementById("workoutGenerated").innerHTML += "Week Two<br>";
				document.getElementById("workoutGenerated").innerHTML += "<b>Monday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosetOne +  Math.round(benchPress*.70) + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosetTwo + Math.round(benchPress*.10) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosetThree + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosetFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Tuesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosecondOne + Math.round(deadLift*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosecondTwo + Math.round(deadLift*.2) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosecondThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twosecondFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Wednesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].twothirdOne + Math.round(overHead*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twothirdTwo + Math.round(overHead*.3) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twothirdThree + Math.round(overHead*.25) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twothirdFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Friday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofourthOne + Math.round(benchPress*.65) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofourthTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofourthThree + Math.round(benchPress*.10) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofourthFour + Math.round(benchPress*.10) +"<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Saturday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofiveOne + Math.round(backSquat*.7) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofiveTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofiveThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].twofiveFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Sunday:</b> Rest Day<br><br>";
				
				document.getElementById("workoutGenerated").innerHTML += "Week Three<br>";
				document.getElementById("workoutGenerated").innerHTML += "<b>Monday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesetOne +  Math.round(benchPress*.70) + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesetTwo + Math.round(benchPress*.1) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesetThree + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesetFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Tuesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesecondOne + Math.round(deadLift*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesecondTwo + Math.round(deadLift*.2) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesecondThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threesecondFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Wednesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].threethirdOne + Math.round(overHead*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threethirdTwo + Math.round(overHead*.3) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threethirdThree + Math.round(overHead*.25) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threethirdFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Friday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefourthOne + Math.round(benchPress*.65) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefourthTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefourthThree + Math.round(benchPress*.10) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefourthFour + Math.round(benchPress*.10) +"<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Saturday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefiveOne + Math.round(backSquat*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefiveTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefiveThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].threefiveFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Sunday:</b> Rest Day<br><br>";
				
				document.getElementById("workoutGenerated").innerHTML += "Week Four<br>";
				document.getElementById("workoutGenerated").innerHTML += "<b>Monday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursetOne +  Math.round(benchPress*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursetTwo + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursetThree + Math.round(benchPress*.2) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursetFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Tuesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursecondOne + Math.round(deadLift*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursecondTwo + Math.round(deadLift*.25) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursecondThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].foursecondFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Wednesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthirdOne + Math.round(overHead*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthirdTwo + Math.round(overHead*.35) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthirdThree + Math.round(overHead*.3) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourthirdFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Friday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfourthOne + Math.round(benchPress*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfourthTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfourthThree + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfourthFour + Math.round(benchPress*.15) +"<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Saturday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfiveOne + Math.round(backSquat*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfiveTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfiveThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fourfiveFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Sunday:</b> Rest Day<br><br>";
				
				document.getElementById("workoutGenerated").innerHTML += "Week Five<br>";
				document.getElementById("workoutGenerated").innerHTML += "<b>Monday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesetOne +  Math.round(benchPress*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesetTwo + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesetThree + Math.round(benchPress*.2) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesetFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Tuesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesecondOne + Math.round(deadLift*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesecondTwo + Math.round(deadLift*.25) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesecondThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivesecondFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Wednesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivethirdOne + Math.round(overHead*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivethirdTwo + Math.round(overHead*.35) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivethirdThree + Math.round(overHead*.3) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivethirdFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Friday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefourthOne + Math.round(benchPress*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefourthTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefourthThree + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefourthFour + Math.round(benchPress*.15) +"<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Saturday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefiveOne + Math.round(backSquat*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefiveTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefiveThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].fivefiveFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Sunday:</b> Rest Day<br><br>";
				
				document.getElementById("workoutGenerated").innerHTML += "Week Six<br>";
				document.getElementById("workoutGenerated").innerHTML += "<b>Monday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsetOne +  Math.round(benchPress*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsetTwo + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsetThree + Math.round(benchPress*.2) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsetFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Tuesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsecondOne + Math.round(deadLift*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsecondTwo + Math.round(deadLift*.25) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsecondThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixsecondFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Wednesday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixthirdOne + Math.round(overHead*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixthirdTwo + Math.round(overHead*.35) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixthirdThree + Math.round(overHead*.3) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixthirdFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Friday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfourthOne + Math.round(benchPress*.70) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfourthTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfourthThree + Math.round(benchPress*.15) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfourthFour + Math.round(benchPress*.15) +"<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Saturday:</b><br>";
				
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfiveOne + Math.round(backSquat*.75) +"<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfiveTwo + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfiveThree + "<br>";
				document.getElementById("workoutGenerated").innerHTML += data[+index].sixfiveFour + "<br>";
				
				document.getElementById("workoutGenerated").innerHTML += "<b>Sunday:</b> Rest Day<br><br>";
			})
	}
	
    $scope.dropboxitemselected = function (item) {
 
        $scope.selectedItem = 'Workout Type: ' + item;
        console.log($scope.selectedItem);
      
      if (item.toString() == 'General Training')
		getWorkout(0);
	  else if (item.toString() == 'Body Building')
		getWorkout(1);
	  else if (item.toString() == 'Power Lifting')          
		getWorkout(2);
    }
	
	
});

