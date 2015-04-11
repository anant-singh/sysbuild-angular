/* global Terminal:false, TerminalInput:false, Ethernet:false */
(function () {
    'use strict';
    var Jor1k = require('Jor1k'),
        TermJSTerm = require('TermJSTerm');

    angular
        .module('jor1k.module')
        .constant('Jor1k', Jor1k)
        .constant('TermJSTerm', TermJSTerm);
})();
