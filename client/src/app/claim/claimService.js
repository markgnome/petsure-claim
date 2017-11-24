(function () {
    'use strict';

    angular
        .module('app')
        .factory('claimService', claimService);

    claimService.$inject = ['$http'];
        
    function claimService($http) {
        var service = {
            getPets: getPets
        };

        return service;

        function getPets() {
            return $http({method: 'GET', url: 'http://localhost:5000/api/pets'}).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                return data;
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    }
})();