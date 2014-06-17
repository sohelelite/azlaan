'use strict';

angular.module('mean').controller('AdminController', ['$scope', '$stateParams', '$location', 'Global',
    function($scope, $stateParams, $location, Global) {

        $scope.createInit = function () {
            $scope.page = $stateParams.formName;
        };

    }
]);
