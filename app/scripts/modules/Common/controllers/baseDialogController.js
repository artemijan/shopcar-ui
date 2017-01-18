/**
 * Created by artem on 1/19/17.
 */
define(['../module'], function (module) {
    'use strict';
    function BaseDialogController($scope, $mdDialog) {
        this.credentials = {};
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.submit = function (model) {
            $mdDialog.hide(model);
        };
    }

    BaseDialogController.$inject = ['$scope', '$mdDialog'];
    BaseDialogController.$name = 'WebUI.Common.BaseDialogController';

    module.controller(BaseDialogController.$name, BaseDialogController);
    return BaseDialogController;
});