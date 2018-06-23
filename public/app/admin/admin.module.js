angular
.module('app.admin',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'admin',
    url: '/admin',
    controller: 'AdminController',
    templateUrl: 'app/admin/admin.html'
  })
  .state({
    name: 'admin.users',
    url: '/users',
    controller: 'UsersController',
    templateUrl: 'app/admin/users/users.html'
  })
  .state({
    name: 'admin.clients',
    url: '/clients',
    controller: 'ClientsController',
    templateUrl: 'app/admin/clients/clients.html'
  });
})
