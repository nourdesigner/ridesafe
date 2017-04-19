/**
 * Created by PC1 on 11/04/2017.
 */
/**
 */
var app = angular.module('MyApp', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: './views/userview.html',
        controller: 'UsersController'
        })
        .when('/cha', {
            templateUrl: './views/discussionview.html',
            controller: 'serverController'
        })
        .when('/contact', {
        templateUrl: './views/contactview.html',
        controller: 'contactController'
    })

}]);

