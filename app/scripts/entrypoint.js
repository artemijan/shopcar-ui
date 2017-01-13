/**
 * Created by artem on 11/6/15.
 */
require.config({
    paths: {
        'angular': '../../bower_components/angular/angular',
        'lodash': '../../bower_components/lodash/lodash',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'domReady': '../../bower_components/domReady/domReady',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-messages': '../../bower_components/angular-messages/angular-messages',
        'angular-aria': '../../bower_components/angular-aria/angular-aria',
        'angular-material': '../../bower_components/angular-material/angular-material',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'lodash': {
            deps: []
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular-sanitize', 'angular-messages', 'angular-aria', 'angular-animate']
        }
    }
});
require(['./bootstrap'], function () {
});