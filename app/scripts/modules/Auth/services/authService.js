/**
 * Created by artem on 1/16/17.
 */
define(['../module', 'modules/Common/config/api'], function (module, api) {
    'use strict';
    function AuthService(jsonApiService, securityContext) {
        var me = this;
        me._api = api;
        me._jsonApiService = jsonApiService;
        me._securityContext = securityContext;
    }

    AuthService.prototype.signIn = function (credentials) {
        var me = this;
        var endpoint = me._api.auth.signIn(credentials);
        return me._jsonApiService.request(endpoint)
            .then(function(response){
                me._securityContext.setContext(response.payload);
                return response;
            });
    };

    AuthService.$inject = ["WebUI.Common.JsonApiService", "WebUI.Common.SecurityContext"];
    AuthService.$name = 'WebUI.Auth.AuthService';

    module.service(AuthService.$name, AuthService);
    return AuthService;
});