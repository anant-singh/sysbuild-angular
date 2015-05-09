(function(){
    'use strict';

    angular
        .module('app.layout')
        .controller('StatusBarController', StatusBarController);

    StatusBarController.$inject = ['jor1kGUI'];

    /* @ngInject */
    function StatusBarController(jor1kGUI) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }
})();
