
var app = angular.module('impeachment', ['ngMaterial','ngRoute','ListCtrl']);

app.config(function($routeProvider,$mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('red');

    $routeProvider
        .when('/', {
            controller:'ListCtrl',
            templateUrl:'views/list.html'
        })
});