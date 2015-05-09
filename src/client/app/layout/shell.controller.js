(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger', '$mdSidenav', 'jor1kGUI'];
    /* @ngInject */
    function ShellController($rootScope, $timeout, config, logger, $mdSidenav, jor1kGUI) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.toggleMenu = toggleMenu;
        vm.termDiv = document.getElementById('tty0');
        $rootScope.showSplash = true;
        vm.navline = {
            title: config.appTitle
        };

        activate();

        function activate() {
            //jor1kGUI.boot(vm.termDiv);
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 2000);
        }

        function toggleMenu(e) {
            console.log(e);
            $mdSidenav('left').toggle();
        }
    }
})();
