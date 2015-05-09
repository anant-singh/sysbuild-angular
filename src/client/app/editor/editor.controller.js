(function () {
    'use strict';
    angular
        .module('app.editor')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['logger', 'editorThemes'];

    /* @ngInject */
    function EditorController(logger, editorThemes) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'EditorController';
        vm.aceThemes = editorThemes;
        vm.aceTheme = editorThemes[0];
        vm.aceOptions= {
            theme: vm.aceTheme,
            mode: 'c_cpp',
            onLoad: function (_ace){
                vm.updateTheme = function(theme) {
                    _ace.setTheme('ace/theme/' + theme);
                };
            }
        };
        activate();

        ////////////////

        function activate() {
            logger.info('Editor loaded');
        }


    }
})();
