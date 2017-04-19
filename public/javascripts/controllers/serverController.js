angular.module('MyApp')
    .controller('serverController', ['$scope', '$http', function ($scope, $http,$window) {
        $window.location.href="http://www.google.com";
    }])
