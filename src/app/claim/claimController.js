(function () {
    'use strict';

    angular
        .module('app')
        .controller('ClaimController', ClaimController);

    ClaimController.$inject = ['claimService', '$scope'];

    function ClaimController(claimService, $scope) {

        $scope.title = 'Make a claim';
        $scope.pets = [];
        $scope.selectedPet = '';
        $scope.attachments = [];
        $scope.fileNames = $scope.attachments.map(file => {
            return `[${file.name}]` 
        });
        $scope.submit = function(){
            new Noty({
                type: 'info', 
                text: `Thank you for submitting files ${$scope.attachments.map(file => {
                    return ` [${file.name}]` 
                }).join()} for ${$scope.selectedPet}`,
                layout: 'bottomRight',
            }).show();
            console.log($scope.attachments.map(file => {
                return `[${file.name}]` 
            }).toString());
            console.log(`Thank you for submitting files for ${$scope.selectedPet}`);
        }
        $scope.dzOptions = {
                url: '/upload',
                paramName: 'files',
                maxFilesize: '20',
                addRemoveLinks: true,
                dictDefaultMessage: 'Drag and drop, or <u>select from inbox.</u>',
                dictRemoveFile: 'Remove',
                dictRemoveFileConfirmation: 'Are you sure you want to remove this file?',
                acceptedFiles: 'image/jpeg, images/jpg, image/png, application/pdf, application/doc, application/docx',
                init: function () {
                    this.on("addedfile", function (file) {
                        $scope.attachments.push(file);
                        console.log($scope.attachments);
                        console.log(!$scope.selectedPet && $scope.attachments.length != 0);
                      
                    });
                    this.on("removedfile", function(file){
                        var index = $scope.attachments.indexOf(file.name);
                        $scope.attachments.splice(index, 1); 
                        console.log('file removed ' + file.name);
                    });
                }
            };
        $scope.dzMethods = {};
        getPets();
        function getPets() {
            $scope.pets = claimService.getPets();
        }
    }
})();