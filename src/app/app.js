(function () {
    'use strict';
    Dropzone.autoDiscover = false;

    angular.module('app', ['ngAnimate', 'ngRoute', 'thatisuday.dropzone'])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/',{  templateUrl: 'app/claim/claimView.html', title: 'Claim'})
            .otherwise({ redirectTo: '/' });
    }
})();
