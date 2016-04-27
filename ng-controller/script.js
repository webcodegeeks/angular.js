var myApp = angular.module('myApp', []);

myApp.controller('UserController', ['$scope', function($scope) {
	$scope.username = 'unknown';
	
	$scope.reset = function() {
        $scope.username = '';
    };
}]);