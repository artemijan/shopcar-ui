/**
 * Created by artem on 11/9/15.
 */
module.exports = function (grunt, config) {
    var serveStatic = require('serve-static');
    return {
        options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: false,
                middleware: function (connect) {
                    return [
                        //connect.static('.tmp'),
                        connect().use(
                            '/bower_components',
                            serveStatic('./bower_components')
                        ),
                        connect().use(
                            '/vendor',
                            serveStatic(config.appConfig.server + '/vendor')
                        ),
                        connect().use(
                            '/.tmp',
                            serveStatic('.tmp')
                        ),
                        connect().use(
                            '/scripts',
                            serveStatic(config.appConfig.app + '/scripts')
                        ),
                        connect().use(
                            '/views',
                            serveStatic(config.appConfig.server + '/views')
                        ),
                        //connect.static(appConfig.dist),
                        serveStatic(config.appConfig.server)
                    ];
                }
            }
        },
        dist: {
            options: {
                open: false,
                base: '<%= appConfig.dist %>'
            }
        }
    }
};
