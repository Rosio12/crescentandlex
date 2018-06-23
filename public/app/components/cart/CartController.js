angular
.module('app')
.component('cart', {
    controller: 'CartController',
    templateUrl: '/app/components/cart/cart.html',
    bindToController: true //required for $scope to work
})
.controller('CartController',function($scope, UserFactory, CandlesFactory, CartFactory){
    $scope.user = UserFactory;
    $scope.cart = CartFactory.cart;
});
