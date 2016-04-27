function validationCtrl($scope) {
   var validUsername = "Thodoris Bais";
   var validEmail = "thodoris.bais@gmail.com";
   
   $scope.reset = function(){
		$scope.username = validUsername;
		$scope.email = validEmail;
   }   
   
   $scope.checkData = function() {
		if ($scope.username != validUsername || $scope.email != validEmail) {
			alert("The data provided do not match with the default owner");
		} else {
			alert("Seems to be ok!");
		}
	}
}