(function() {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    url: '/',
                    controller: 'ShellController',
                    controllerAs: 'vm',
                    views: {
                        main: {
                            templateUrl: 'app/editor/editor.html',
                            controller: 'EditorController',
                            controllerAs: 'vm'
                        },
                        sidenavRight: {
                            templateUrl: 'app/lessons/lessons.html',
                            controller: 'LessonsController',
                            controllerAs: 'vm'
                        }
                    }
                }
            }
        ];
    }
})();
