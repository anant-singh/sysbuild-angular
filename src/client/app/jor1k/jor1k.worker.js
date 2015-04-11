(function () {
    'use strict';

    angular
        .module('jor1k.module')
        .factory('jor1kInterface', jor1kInterface);

    jor1kInterface.$inject = ['Jor1k', 'TermJSTerm', 'jor1kConfig', '$q', 'logger'];

    /* @ngInject */
    function jor1kInterface(Jor1k, TermJSTerm, jor1kConfig, $q, logger) {
        var jor1kgui = null,
            term = null,
            bootPromise = null,
            term_output = '';


        var service = {
            boot: boot,
            onUploadFiles: onUploadFiles,
            putCharListener: putCharListener
        };

        service.gui = jor1kgui;
        service.terminal = term;
        return service;

        ////////////////

        function boot(terminalElem) {
            bootPromise = $q.defer();
            term = new TermJSTerm(terminalElem);
            jor1kConfig.term = term;
            jor1kgui = new Jor1k(jor1kConfig);
            jor1kgui.term.term.on('data', putCharListener);

            return bootPromise;
        }

        function onUploadFiles(){

        }

        function putCharListener(c){
            term_output = term_output + c;
            if((term_output.indexOf('activiate this console.') != -1)){
                bootPromise.resolve();
                SendKeys('\n');
                logger.success('Jor1k Booted Up');
            }
        }

        function SendKeys(text){
            for(var i=0; i < text.length; i++){
                jor1kgui.message.Send('tty0', [text.charCodeAt(i) >>>0]);
            }
        }
    }

})();
