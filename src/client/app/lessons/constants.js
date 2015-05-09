(function(){
    'use strict';
    var config = {
        baseUrl: '/sysassets/'
    };

    angular
        .module('app.lessons')
        .value('lessonsConfig', config);
})();
