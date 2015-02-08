'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', function ($scope) {

    $scope.user = {};
    $scope.user.details = {
        "username": "Aaron Rodriguez",
        "id": "1337"
    };

}]);