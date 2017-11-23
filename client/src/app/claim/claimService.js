(function () {
    'use strict';

    angular
        .module('app')
        .factory('claimService', claimService);

    function claimService() {
        var service = {
            getPets: getPets
        };

        return service;

        function getPets() {
            return [
                {name: 'Rover'},
                {name: 'Fido'},
                {name: 'Pixie'}
            ];
        }
    }
})();