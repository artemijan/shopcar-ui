/**
 * Created by Artem on 1/12/2017.
 */
define(
    [
        'angular',
        'Env',
        'angular-material',
        'angular-ui-router',
        'angular-sanitize',
        'angular-animate',
        'angular-mocks',
        'angular-messages',
        "angular-aria",
        "angular-aria",
        "modules/Common/index",
        "modules/Auth/index"
    ],

    function (angular, Env) {
        var deps = [
            'ui.router',
            'ngMessages',
            'ngAnimate',
            'ngSanitize',
            'ngMaterial',
            'WebUI.Common',
            'WebUI.Auth'
        ];
        if (Env.useFakeAPIService) {
            deps[deps.length] = 'ngMockE2E';
        }
        var app = angular.module('WebUI', deps);
        app.run([
            '$rootScope',
            '$state',
            '$stateParams',
            '$mdDialog',
            '$mdToast',
            'WebUI.Auth.AuthService',
            'WebUI.Common.SecurityContext',
            function ($rootScope, $state, $stateParams, $mdDialog, $mdToast, authService, securityContext) {
                $rootScope.onTabSelect = function (tab) {
                    $rootScope._currentTab = tab;
                };
                $rootScope.loggedInUser = securityContext.getContext();
                $rootScope.$on(securityContext.$onChangeEventName, function () {
                    $rootScope.loggedInUser = securityContext.getContext();
                });
                $rootScope.openSignInModal = function (ev) {
                    // Appending dialog to document.body to cover sidenav in docs app
                    $mdDialog.show(
                        {
                            controller: 'WebUI.Common.BaseDialogController',
                            templateUrl: 'views/auth/signInForm.html',
                            targetEvent: ev,
                            clickOutsideToClose: false
                        }
                    ).then(function (result) {
                        $rootScope.signIn(result)
                    });
                };
                $rootScope.signIn = function (credentials) {
                    $rootScope.busy = true;
                    authService.signIn({username: credentials.username, password: credentials.password})
                        .then(function (response) {
                            $mdToast.show(
                                $mdToast.simple()
                                    .textContent("you have been logged in.")
                                    .hideDelay(3000)
                                    .toastClass('toast-success')
                            )
                        })
                        .catch(function (response) {
                            $mdToast.show(
                                $mdToast.simple()
                                    .textContent(response.service.error_message)
                                    .hideDelay(3000)
                                    .toastClass('toast-error')
                            )
                        })
                        .finally(function () {
                            $rootScope.busy = false;
                        });
                };
                $rootScope.navBarTabs = [
                    {
                        name: 'home',
                        verboseName: 'Home',
                        state: '/'
                    },
                    {
                        name: 'categories',
                        verboseName: 'Categories'
                    },
                    {
                        name: 'products',
                        verboseName: 'Products'
                    }
                ];
                $rootScope.onTabSelect($rootScope.navBarTabs[0]);
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
            '$mdThemingProvider',
            function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
                $mdThemingProvider.theme('default').dark();
                $stateProvider
                    .state('root', {
                        url: '',
                        data: {
                            redirect: 'rootEnter'
                        }
                    })
                    .state('rootEnter', {
                        url: '/',
                        templateUrl: 'views/common.html'
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