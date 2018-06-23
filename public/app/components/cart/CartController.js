angular
.module('app')
.component('cart', {
    controller: 'CartController',
    templateUrl: '/app/components/cart/cart.html',
    bindToController: true //required for $scope to work
})
.controller('CartController',function($scope, UserFactory, CandlesFactory){
    $scope.user = UserFactory;
    //$scope.cart = ;
    $scope.cart = {};

    $scope.add = function(candle)
    {
      if(!$scope.cart[candle.title])
      {
        $scope.cart[candle.title] = {title:candle.title, quantity:0, cost:0};
      }
      $scope.cart[candle.title].quantity++;
      $scope.cart[candle.title].cost += candle.price;
    }

});
