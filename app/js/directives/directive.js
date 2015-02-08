'use strict';

myApp.directive('roundButton', function () {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        templateUrl: 'js/directives/templates/roundButton.html',
        link: function (scope, element, attrs) {
            // DOM manipulation/events here!
        }
    };
});