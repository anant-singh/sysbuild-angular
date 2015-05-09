(function() {
    'use strict';

    angular
        .module('app.lessons')
        .controller('LessonsController', LessonsController);

    LessonsController.$inject = ['$state', 'lessonStore', '$q', 'logger'];
    /* @ngInject */
    function LessonsController($state, lessonStore, $q, logger) {
        var vm = this;
        vm.title = 'Lessons';
        vm.isSelected = false;
        vm.lessons = {};
        vm.docFileURL = '';
        vm.currentSection = null;
        vm.updateSection = updateSection;
        vm.onPlayerReady = onPlayerReady;
        vm.API = null;
        vm.videoConfig = {
            sources: [],
            tracks: []
        };
        activate();

        function activate() {

            return lessonStore.getChapters().then(function (data){
                vm.lessons = data;
                logger.info('Populated lessons');
                return vm.lessons;
            });
        }

        function updateSection(key, section){
            vm.isSelected = true;
            vm.currentSection = section;
            lessonStore.setCurrentSection(section);
            vm.API.stop();
            vm.videoConfig.sources = [lessonStore.getVideo()];
            console.log(vm.videoConfig.sources);
            vm.docFileURL = lessonStore.getDocFileURL();
        }

        function onPlayerReady(API){
            vm.API = API;
        }


    }
})();
