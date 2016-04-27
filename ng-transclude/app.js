var app = angular.module('mainApp', []);
 
app.directive('myTransclusionDirective', function() {
 
  return {
    restrict: 'EA',
    scope:{}, //isolate scope.
    transclude:false,
    template: "<div ng-transclude></div><div>My first transclusion directive.</div>"
  };
 
});