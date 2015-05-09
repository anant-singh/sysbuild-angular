(function () {
    'use strict';

    angular
        .module('jor1k.module')
        .factory('jor1kGUI', jor1kGUI);

    jor1kGUI.$inject = ['Jor1k', 'TermJSTerm', 'jor1kConfig', '$q', 'logger', 'UTF8'];

    /* @ngInject */
    function jor1kGUI(Jor1k, TermJSTerm, jor1kConfig, $q, logger, UTF8) {
        var jor1kgui = null,
            term = null,
            bootPromise = null,
            status = 'terminated';


        var service = {
            boot: boot,
            onUploadFiles: onUploadFiles,
            rowOutputListener: rowOutputListener
        };

        service.gui = jor1kgui;
        service.terminal = term;
        return service;

        ////////////////

        function boot(terminalElem) {
            if(status === 'terminated') {
                status = 'booting';
                bootPromise = $q.defer();
                term = new TermJSTerm(terminalElem, rowOutputListener);
                jor1kConfig.term = term;

                jor1kgui = new Jor1k(jor1kConfig);
            }
            return bootPromise;
        }

        function onUploadFiles(){

        }

        function rowOutputListener(d){
            //console.log(d);
            if(d.indexOf('root login on') !== -1){
                logger.info('Jor1k Booted successfully');
                console.log(d);
                sendKeys('\n');
                bootPromise.resolve();
            }
        }

        function sendKeys(text){
            var chars=[];
            for(var i=0; i < text.length; i++){
                chars.push(UTF8.unicodeToUTF8Stream(text.charCodeAt(i)));
            }
            jor1kgui.message.Send('tty0', chars);
        }
    }

})();
