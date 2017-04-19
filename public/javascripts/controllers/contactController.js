angular.module('MyApp')
    .controller('contactController', ['$scope', '$http', function ($scope, $http) {
        $http.get('/',function (req,res) {
            res.render("contact");
        })
        $http.post("/contact",function (req,res) {

        });
    }])
