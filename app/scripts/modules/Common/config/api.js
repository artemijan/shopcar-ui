/**
 * Created by artem on 1/16/17.
 */
define(function () {
    'use strict';
    var ALLOWED_METHODS = {
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        DELETE: "DELETE"
    };

    function ApiBuilder() {
    }

    var Api = {
        getData: function () {
            return {
                url: '/categories/list',
                method: ALLOWED_METHODS.GET
            };
        }
    };
    Api['auth'] = {
        /**
         * @param credentials - {username: string, password:string}
         * @returns {{url: string, method: string, data: {username: *, password: (*|boolean|string|Firebug.module:Selector.selectors.filters.password)}}}
         */
        signIn: function (credentials) {
            return {
                url: '/auth/sign_in',
                method: ALLOWED_METHODS.POST,
                data: {
                    username: credentials.username,
                    password: credentials.password
                }
            };
        }
    };
    return Api;
});