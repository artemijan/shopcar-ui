/**
 * Created by Artem on 1/12/2017.
 */
define([
        'angular',
        'Env',
        'angular-material',
        'angular-ui-router',
        'angular-sanitize',
        'angular-animate',
        'angular-mocks',
        'angular-messages',
        "angular-aria"
    ],

    function (angular, Env) {
        var deps = [
            'ui.router',
            'ngAnimate',
            'ngSanitize',
            'ngMaterial'
        ];
        if (Env.useFakeAPIService) {
            deps[deps.length] = 'ngMockE2E';
        }
        var app = angular.module('WebUI', deps);
        app.run([
            '$rootScope',
            '$state',
            '$stateParams',
            function ($rootScope, $state, $stateParams) {
                //get docker version
                $rootScope.$on('$stateChangeStart', function (event, nextState, nextStateParams, curState, curStateParams) {
                    $rootScope.currentState = nextState;
                    //Redirect handling
                    if (nextState.data && nextState.data.redirect) {
                        event.preventDefault();
                        $state.go(nextState.data.redirect);
                        return false;
                    }
                    return true;
                });
                $rootScope.stateMatch = function (inState) {
                    if ($rootScope.currentState && $rootScope.currentState.name && $rootScope.currentState.name.indexOf(inState) >= 0) {
                        return true;
                    }
                    return false;
                };
            }
        ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('root', {
                        url: '',
                        data: {
                            redirect: 'rootEnter'
                        }
                    })
                    .state('rootEnter', {
                        url: '/',
                        data: {
                            redirect: 'login'
                        }
                    })
                    .state('login', {
                        url: '/login',
                        templateUrl: "views/login.html"
                    })
                    .state('404', {
                        templateUrl: '404.html'
                    })
                    .state('accessDenied', {
                        templateUrl: 'accessDenied.html'
                    });
                $urlRouterProvider.otherwise(function ($injector) {
                    var state = $injector.get('$state');
                    state.go('404', null, {location: false});
                });
            }
        ]);
        return app;
    }
);