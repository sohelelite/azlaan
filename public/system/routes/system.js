'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // Check if the user is connected
            var checkLoggedin = function($q, $timeout, $http, $location) {
                // Initialize a new promise
                var deferred = $q.defer();

                // Make an AJAX call to check if the user is logged in
                $http.get('/loggedin').success(function(user) {
                    // Authenticated
                    if (user !== '0') $timeout(deferred.resolve);

                    // Not Authenticated
                    else {
                        $timeout(deferred.reject);
                        $location.url('/login');
                    }
                });

                return deferred.promise;
            };


            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider              
                .state('home', {
                    url: '/',
                    views:{
                        ''          : { templateUrl: 'public/system/views/index.html' },
                        'menu@home' : { templateUrl: 'public/system/views/includes/menu.html' }
                    },
                    resolve:{
                        loggedin : checkLoggedin
                    }
                })

                .state('admin',{
                    url : '/admin',
                    templateUrl: 'public/system/views/index.html',
                    resolve:{
                        loggedin : checkLoggedin
                    }
                })

                .state('create',{
                    url: '/admin/:formName/create',
                    views:{
                        ''                  : { templateUrl: 'public/system/views/index.html' },
                        'menu@create'       : { templateUrl: 'public/system/views/includes/menu.html' },
                        'content@create'    : { templateUrl: 'public/system/views/create.html' }
                    },
                    resolve:{
                        loggedin : checkLoggedin
                    }
                })

                .state('list',{
                    url: '/admin/:formListName/list',
                    views:{
                        ''                  : { templateUrl: 'public/system/views/index.html' },
                        'menu@create'       : { templateUrl: 'public/system/views/includes/menu.html' },
                        'content@create'    : { templateUrl: 'public/system/views/list.html' }
                    },
                    resolve:{
                        loggedin : checkLoggedin
                    }
                })

                .state('auth', {
                    templateUrl: 'public/auth/views/index.html'
                });
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
