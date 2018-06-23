angular
.module('app')
.factory('CandlesFactory', function(){
  var candles= {
  pure:
  [
    {title:'Pure Lily of the Valley', description:'The lace-like flower is among the softer and sweeter of the white lily family. This tradtional and rare scent is captured in its purest form in our Pure Collection.', price:45, image:"images/PURE_SCENTS/Pure_lily_of_the_valley.jpg" },
    {title:'Pure Fresia', description:'The Fresia floral scent is a clean and delicatluy fresh. This soft floral yet "not too Floral" scent is captured in its purest form in our Pure Collection.', price:45, image:"images/PURE_SCENTS/Pure_fresia.jpg" },
    {title: 'Pure Rose', description:'This rose scent is modeled after the most purest rose scent from the Parfumeries in Paris, known as "Rose Angelique". It is a stronger rose scent, envkong romantic imagery of iconic deep red roses.', price:45, image:"images/PURE_SCENTS/Pure_rose.jpg"},
    {title: 'Pure Baise', description:'The Baise scent is alike to a soft garden rose combined with a hint of blackcurrants for richness. This modern is of the most popular scent captured in our Pure Collection.', price:45, image:"images/PURE_SCENTS/Pure_baise.jpg"},
    {title: 'Pure Jasmine', description:'This tradtional floral scent gives off an exotic sweet and strong perfume. This traditionally asian an arabian is modernized in our Pure Collection.', price:45, image: "images/PURE_SCENTS/Pure_jasmine.jpg"},
    {title: 'Pure Lilac', description:'This tradtional floral scent gives off a sweet french country scent of lilac.', price:45, image: "images/PURE_SCENTS/Pure_lilac.jpg"}
  ],

  wine:
  [
    {title:'CA Oak Chardonnay', description:'The lace-like flower is among the softer and sweeter of the white lily family. This tradtional and rare scent is captured in its purest form in our Pure Collection.', price:45, image:"images/WINE_SCENTS/CA_Oak_chardonnay.jpg"},
    {title:'Celebration Champagne', description:'The Fresia floral scent is a clean and delicatluy fresh. This soft floral yet "not too Floral" scent is captured in its purest form in our Pure Collection.', price:45, image:"images/WINE_SCENTS/Celebration_Champagne.jpg"},
    {title: 'Everyday Pinot', description:'This rose scent is modeled after the most purest rose scent from the Parfumeries in Paris, known as "Rose Angelique". It is a stronger rose scent, envkong romantic imagery of iconic deep red roses.', price:45, image:"images/WINE_SCENTS/Everyday_Pinot.jpg"},
    {title: 'Full Body GSM', description:'The Baise scent is alike to a soft garden rose combined with a hint of blackcurrants for richness. This modern is of the most popular scent captured in our Pure Collection.', price:45, image:"images/WINE_SCENTS/Full_Body_GSM.jpg"}
  ],
  seasonal:
  [
    {title:'Agave Sage', description:'The lace-like flower is among the softer and sweeter of the white lily family. This tradtional and rare scent is captured in its purest form in our Pure Collection.', price:45, image:"images/SEASONAL_SCENTS/Agave_sage.jpg"},
    {title:'Sandalwood Orange Blossom', description:'The Fresia floral scent is a clean and delicatluy fresh. This soft floral yet "not too Floral" scent is captured in its purest form in our Pure Collection.', price:45, image:"images/SEASONAL_SCENTS/Sandalwood_orange_blossom.jpg"},
    {title: 'White Rose Tobacco', description:'This rose scent is modeled after the most purest rose scent from the Parfumeries in Paris, known as "Rose Angelique". It is a stronger rose scent, envkong romantic imagery of iconic deep red roses.', price:45, image:"images/SEASONAL_SCENTS/White_rose_tobacco.jpg"}
  ],
  destination:
    [
    {title:'Beaches of Corsica', description:'The lace-like flower is among the softer and sweeter of the white lily family. This tradtional and rare scent is captured in its purest form in our Pure Collection.', price:45, image:"images/DESTINATION_SCENTS/Beaches_of_Corsica.jpg"},
    {title:'Fall in NYC', description:'The Fresia floral scent is a clean and delicatluy fresh. This soft floral yet "not too Floral" scent is captured in its purest form in our Pure Collection.', price:45, image:"images/DESTINATION_SCENTS/Fall_In_NYC.jpg"},
    {title: 'Nights in Nice', description:'This rose scent is modeled after the most purest rose scent from the Parfumeries in Paris, known as "Rose Angelique". It is a stronger rose scent, envkong romantic imagery of iconic deep red roses.', price:45, image:"images/DESTINATION_SCENTS/Nights_In_Nice.jpg"},
    {title: 'Springtime in Napa', description:'The Baise scent is alike to a soft garden rose combined with a hint of blackcurrants for richness. This modern is of the most popular scent captured in our Pure Collection.', price:45, image:"images/DESTINATION_SCENTS/Springtime_In_Napa.jpg"}
  ]
};
return candles;
})

.controller("HomeController", function($scope, $http, CandlesFactory){
  $scope.title = "Home Page";
  $scope.cart = {};

  $scope.counter = 0;
  $scope.person={
    name: "Rosio",
    age: 37,
    address: "156 S. Crescent Dr",
    products:[
    {name:"candle 1", price:55},
    {name: "candle 2", price:57}
    ]
  };
  $scope.candles=CandlesFactory.candles;
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
