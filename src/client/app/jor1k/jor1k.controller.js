(function(){
    'use strict';

    angular
        .module('jor1k.module')
        .controller('Jor1kController', Jor1kController);

    Jor1kController.$inject = ['jor1kGUI', 'logger'];

    /* @ngInject */
    function Jor1kController(jor1kGUI, logger) {
        /* jshint validthis: true */
        var vm = this;
        vm.tty0Visible = false;
        vm.activate = activate;
        vm.title = 'Terminals';
        vm.termDiv = document.getElementById('tty0');
        vm.tty0Toggle = tty0Toggle;

        activate();

        ////////////////

        function activate() {
            jor1kGUI.boot(vm.termDiv);
        }

        function tty0Toggle(){
            vm.tty0Visible = !vm.tty0Visible;
        }


    }
})();
