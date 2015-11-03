angular.module('directivePractice', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'homeTmpl.html',
            controller: 'homeCtrl'
        })


    $urlRouterProvider
        .otherwise('/home');


});
