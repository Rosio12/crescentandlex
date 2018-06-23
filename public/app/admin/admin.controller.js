angular
.module('app.admin')
.controller('AdminController',function($scope, $state, navigation){
  $scope.navagation = navigation;
  $scope.$state = $state;
});
