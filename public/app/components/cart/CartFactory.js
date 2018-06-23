angular
.module('app')
.factory('CartFactory', function(){
    var self = this;
    self.cart = {};
    self.add = function(candle)
    {
        if(!self.cart[candle.title])
        {
          self.cart[candle.title] = {title:candle.title, quantity:0, cost:0};
        }
        self.cart[candle.title].quantity++;
        self.cart[candle.title].cost += candle.price;
    }
    return self;
})
