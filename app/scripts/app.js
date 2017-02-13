 (function() {
     function config($stateProvider) {
         
         $stateProvider
         .state('home', {
             url: '/',
             controller: 'RoomsCtrl as room',
             templateUrl: '/templates/home.html'
         })
         
     }
 
     angular
         .module('blocChat', ['ui.router', firebase])
         .config(config);
 })();