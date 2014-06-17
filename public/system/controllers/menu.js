'use strict';

angular.module('mean.system').controller('MenuController', ['$scope',
    function ($scope) {

        /* Sidebar tree view */
        angular.element('.sidebar .treeview').tree();

    }
]);
