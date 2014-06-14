'use strict';

angular.module('mean.admin').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('admin example page', {
            url: '/admin/example',
            templateUrl: 'admin/views/index.html'
        });
    }
]);
