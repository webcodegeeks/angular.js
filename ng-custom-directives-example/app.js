var app = angular.module("app", []);
    app.directive('myDirective', function() {
        var directive = {};

        directive.restrict = 'A'; 
        template : "<h1>Hey, I'm the directive's content, but I won't be displayed!</h1>"
        
        directive.link = function($scope, element, attributes) {
                element.html("This is the new content, overridden from the <code>$link</code> function: " + $scope.content);
                element.css("background-color", "#cccccc");
        }
        

        return directive;
    })
    app.controller("myController", function($scope, $http) {

        $scope.content = "I'm the directive's updated content!";
        
    });