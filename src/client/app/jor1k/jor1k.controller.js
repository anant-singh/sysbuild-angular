(function(){
    'use strict';

    angular
        .module('jor1k.module')
        .controller('Jor1kController', Jor1kController);

    Jor1kController.$inject = ['jor1kInterface', 'logger'];

    /* @ngInject */
    function Jor1kController(jor1kInterface, logger) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'Jor1kController';
        vm.termDiv = document.getElementById('tty0');

        activate();

        ////////////////

        function activate() {
            jor1kInterface.boot(vm.termDiv);
        }


    }
})();
