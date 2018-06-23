console.log("Inside app.js");
'use strict';
//Configure Firebase
var config = {
  apiKey: "AIzaSyDQS6J2TBTfi338BMg-CEg0TjywH8SrkAM",
  authDomain: "crescent-and-lex.firebaseapp.com",
  databaseURL: "https://crescent-and-lex.firebaseio.com",
  projectId: "crescent-and-lex",
  storageBucket: "crescent-and-lex.appspot.com",
  messagingSenderId: "768955371452"
};
// Initialize Firebase
firebase.initializeApp(config);


angular
.module('app',['ui.router','ui.grid','firebase','ui.bootstrap','ui-notification','app.admin','app.home'])
.config(function($urlRouterProvider, NotificationProvider) {
  $urlRouterProvider.otherwise('/home');

  NotificationProvider.setOptions({
    delay: 5000,
    startTop: 50,
    startRight: 40,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'right',
    positionY: 'bottom'
  });
})
.constant('config', {
    //see components/user/components.js
    defaultState: 'home',
    defaultAdminState: 'admin.newsletter'
});
