(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize', 'btford.markdown','com.2fdevs.videogular.plugins.controls',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus', 'ngMaterial', 'ngMorph', 'ui.ace', 'com.2fdevs.videogular',
            'com.2fdevs.videogular.plugins.overlayplay',
            'com.2fdevs.videogular.plugins.buffering',
            'ui.drop', 'ngFx'
        ]);
})();
