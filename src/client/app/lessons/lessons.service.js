(function(){
    'use strict';

    angular
        .module('app.lessons')
        .factory('lessonStore', lessonStore);

    lessonStore.$inject = ['$http', '$q', 'lessonsConfig'];

    /* @ngInject */
    function lessonStore($http, $q, lessonsConfig) {
        var store = {},
            currentSection = null,
            isEmpty = true;

        var service = {
            getChapters: getChapters,
            setCurrentSection: setCurrentSection,
            getDocFileURL: getDocFileURL,
            getVideo: getVideo
        };

        return service;

        ////////////////

        function getChapters() {
            if(!isEmpty) {
                return store;
            }

            return $http.get(lessonsConfig.baseUrl + 'sys.min.json')
                .then(success)
                .catch(fail);

            function success(response){
                store = response.data;
                isEmpty = false;
                return store;
            }

            function fail(error){
                var msg = 'Couldn\'t get Chapters:' + error.data.description;
                return $q.reject(msg);
            }
        }

        function setCurrentSection(section){
            currentSection = section;
        }

        function getDocFileURL(){
            if(currentSection !== null){
                if(currentSection.activities[1] && currentSection.activities[1].docFile){
                    return lessonsConfig.baseUrl + currentSection.activities[1].docFile;
                }
                else{
                    return '';
                }
            }
        }

        function getVideo(){
            if(currentSection !== null){
                return {
                    src: lessonsConfig.baseUrl + currentSection.activities[0].file + '.mp4',
                    type: 'video/mp4'
                };
            }
        }


    }


})();
