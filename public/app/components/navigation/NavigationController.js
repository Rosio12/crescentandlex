angular
.module('app')
.component('navigation', {
    controller: 'NavigationController',
    templateUrl: '/app/components/navigation/navigation.html',
    bindToController: true //required for $scope to work
})
.controller('NavigationController',function($scope, UserFactory){
    $scope.user = UserFactory;
    //$scope.navigation = ;
});
