(function() {
    'use strict';

    angular
        .module('jor1k.module')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'jor1k',
                config: {
                    url: '/jor1k',
                    templateUrl: 'app/jor1k/jor1k.html',
                    controller: 'Jor1kController',
                    controllerAs: 'vm',
                    title: 'Jor1k',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-desktop"></i> Jor1k'
                    }
                }
            }
        ];
    }
})();
