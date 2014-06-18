'use strict';

angular.module('mean.admin').controller('AdminController', ['$scope', '$stateParams', '$location', 'Global', 'Admin',
    function($scope, $stateParams, $location, Global, Admin) {
        $scope.global = Global;
        $scope.package = {
            name: 'admin'
        };

        $scope.createInit = function () {
            $scope.page = $stateParams.formName;
        };
    }
]);
