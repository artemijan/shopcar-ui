/**
 * Created by artem on 1/17/17.
 */
define(['../module'], function (module) {
    "use strict";

    SecurityContext.$name = "WebUI.Common.SecurityContext";
    SecurityContext.$inject = ["$rootScope"];

    function SecurityContext($rootScope) {
        var service = {};
        service.$onChangeEventName = 'securityContext:change';
        service._$rootScope = $rootScope;
        service.securityKey = 'securityContext';

        service.setContext = function (config) {
            localStorage.setItem(this.securityKey, JSON.stringify(config));
            this._$rootScope.$broadcast(this.$onChangeEventName);
        };
        service.getContext = function () {
            return JSON.parse(localStorage.getItem(this.securityKey));
        };
        return service;
    }

    module.service(SecurityContext.$name, SecurityContext);
    return SecurityContext;
});