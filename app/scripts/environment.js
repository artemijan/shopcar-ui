define(["configuration"], function (env) {
    "use strict";
    return {
        getDefaultProtocol: function () {
            return env.protocol || "https";
        },
        getSiteUrl: function () {
            return "%s://%s".format(this.getDefaultProtocol(), env.siteDomain);
        },
        getApiUrl: function () {
            return "%s://%s".format(this.getDefaultProtocol(), env.apiDomain);
        },
        getTinymcePluginsPath: function () {
            return env.tinymcePluginsPath;
        },
        getLogLevel: function () {
            return env.logLevel;
        },
        showVersionInfo: function () {
            //Save cast to bool
            return "true" === String(env.showVersion).toLowerCase();
        },
        useXDomain: function () {
            return "true" === String(env.useXDomain).toLowerCase();
        },
        getVersion: function () {
            return String(env.version);
        },
        getGoogleAnalyticsTrackingId: function () {
            return String(env.googleAnalyticsTrackingId);
        },
        isDevelopment: function () {
            return env.environment === "development";
        },
        useFakeBackend: function () {
            return String(env.useFakeApi).toLocaleLowerCase() === "true"
        }
    };
});