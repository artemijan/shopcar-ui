/**
 * Created by Artem on 1/12/2017.
 */
/*global module*/
module.exports = function(grunt){
    "use strict";
    require("load-grunt-tasks")(grunt);
    var configs = require("load-grunt-configs")(grunt);
    configs.pkg = grunt.file.readJSON("package.json");
    configs.dirs = {
        app: "app",
        dist: "dist",
        tmp: ".tmp",
        test: "test"
    };
    configs.host = "localhost";
    grunt.initConfig(configs);
    grunt.registerTask("serve", function (target, host) {
        if (host) {
            configs.host = host;
        }
        if (target === "dist") {
            return grunt.task.run(["connect:dist:keepalive"]);
        }
        var envToUse = "config:dev";
        if (target === "fake") {
            envToUse = "config:fake";
        }
        grunt.task.run([
            "clean:temp",
            envToUse,
            "replace:livereload",
            "processhtml:dev",
            "less:livereload",
            "connect:livereload",
            "watch"
        ]);
    });
};