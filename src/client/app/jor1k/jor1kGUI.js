(function () {
    'use strict';
    angular
        .module('jor1k.module')
        .factory('jor1kGUI', jor1kGUI);

    jor1kGUI.$inject = ['terminal', 'terminalInput', 'ethernet'];

    /* @ngInject */
    function jor1kGUI(terminal, terminalInput, ethernet) {

        var service = {
            config: config
        };
        return service;

        ////////////////

        function config(termId, termIdTwo, imageurls, relayURL){

        }


    }

})();

