'use strict';

angular.module('mean').controller('AdminListController', ['$scope', '$stateParams', '$location', 'Global',
    function($scope, $stateParams, $location, Global) {

        $scope.listInit = function () {
            $scope.page = $stateParams.formName;
        };

    }
]);
