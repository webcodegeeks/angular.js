angular.module('tableApp', [])
	.controller('HobbyCtrl', function ($scope){
        $scope.persons = [
          {"name": "Thodoris", "hobby": "Gym"},
          {"name": "George", "hobby": "Fishing"},
          {"name": "John", "hobby": "Basketball"},
		  {"name": "Nick", "hobby": "Football"},
		  {"name": "Paul", "hobby": "Snooker"}
        ];
    });