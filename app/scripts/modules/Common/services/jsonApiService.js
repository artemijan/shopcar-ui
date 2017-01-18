/**
 * Created by artem on 1/16/17.
 */
define(['../module'], function (module) {
    "use strict";

    jsonApiService.$name = "WebUI.Common.JsonApiService";
    jsonApiService.$inject = [
        "$q",
        "$http"
    ];

    function jsonApiService($q, $http) {
        var service = {};

        service.request = function (requestData) {
            var defer = $q.defer();
            requestData.apiName = 'WebUI';
            requestData.withCredentials = true;
            $http(requestData)
                .then(function (responseData) {

                    /*
                     * HTTP request completed with status code 200-299
                     * It doesn't means that operation completed successfully!
                     * Resolve subsidiary promise with http response data.
                     * Concrete service will handle the business level errors if needed
                     */

                    defer.resolve(responseData.data);
                }, function (httpResponse) {
                    /*
                     * HTTP request failed, code 4xx or 5xx
                     * Generic http error handling is implemented on interceptor level
                     * HTTP errors handling is not responsibility of concrete services.
                     * So, do not touch subsidiary promise! (i"m very serious)
                     */
                    defer.reject(httpResponse);
                });
            return defer.promise;
        };
        return service;
    }

    module.service(jsonApiService.$name, jsonApiService);
    return jsonApiService;
});