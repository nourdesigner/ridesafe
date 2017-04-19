angular.module('MyApp')
    .controller('UsersController', ['$scope', '$http','$location' ,function ($scope, $http,$location) {
       function init() {
           $http.get('http://localhost:3003/user').success(function (data) {
               $scope.users = data;
           });
       }
init();
        $scope.deleteUser = function(){
            $http.delete('http://localhost:3003/user/'+$scope.user._id).success(function(data){
                init();
            });
        };

        $scope.testNG = function () {
            console.log("logged");
        }
        $scope.addUser = function () {
            var data = {
                _id: $scope.user._id,
                firstname: $scope.user.firstname
                , username: $scope.user.username,
                lastname:$scope.user.lastname
            };
            $http.post('http://localhost:3003/user', data).success(function (data, status) {
                console.log(status);
                init();
                alert('user added');
            });
            $location.path('/');
        };
        
        $scope.editUser= function () {
            $http.put('http://localhost:3003/user/'+$scope.user._id).success(function(data){
                init();
            });
            
        }

        $scope.selectuser=function(user,_$index){
            $scope.selectedIndex=_$index;
            $scope.user=user;
        }
    }])


    .controller('UserController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
        $http.get('http://localhost:3003/user').success(function (data) {
            $scope.users = data;
        });


    }])

