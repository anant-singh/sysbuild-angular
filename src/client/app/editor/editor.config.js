(function () {
    'use strict';

    var themes = ['monokai', 'terminal', 'tomorrow', 'xcode'];

    angular
        .module('app.editor')
        .value('editorThemes', themes);


})();
