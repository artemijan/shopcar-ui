require.config({

    packages: [

    ],

    baseUrl: "scripts",

    paths: {
        "configuration": "./configuration",
        "environment": "./environment",
        "angular-mocks": '../bower_components/angular-mocks/angular-mocks',
        "dom-ready": "../bower_components/requirejs-domready/domReady",
        "angular": "../bower_components/angular/angular",
        "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
        "angular-bowser": "../bower_components/angular-bowser/src/angular-bowser",
        //Libs
        "jquery": "../bower_components/jquery/dist/jquery",
        "underscore": "../bower_components/underscore/underscore",
        "bowser":"../bower_components/bowser/src/bowser"
    },

    shim: {
        "jquery": {
            exports: "jquery",
            deps: []
        },
        "angular": {
            deps: ["jquery"],
            exports: "angular"
        },
        'angular-mocks': {
            deps: ['angular'],
            exports: 'angular.mock'
        }
    }
});

// kick start application
require(["dom-ready", "angular", "environment"], function (domReady, angular, env) {
    "use strict";
    alert(1);
});