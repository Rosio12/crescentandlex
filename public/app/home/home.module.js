angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'home',
    url: '/home',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html'
  })
  .state({
    name: 'about',
    url: '/about',
    controller: 'HomeController',
    templateUrl: 'app/home/about.html'
  })
  .state({
    name: 'contact',
    url: '/contact',
    controller: 'HomeController',
    templateUrl: 'app/home/contact.html'
  })
  .state({
      name: 'login',
      url: '/login',
      controller: 'HomeController',
      templateUrl: 'app/home/login.html'

  });
})
