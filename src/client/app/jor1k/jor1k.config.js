(function () {
    'use strict';

    var config = {
        system: {
            kernelURL: 'vmlinux.bin.bz2', // kernel image
            memorysize: 32, // in MB, must be a power of two
            cpu: 'asm', // short name for the cpu to use
            ncores: 1
        },
        fs: {
            basefsURL: 'basefs-compile.json', // json file with the basic filesystem configuration.
            extendedfsURL: '../jor1k-sysroot/fs.json', // json file with extended filesystem informations. Loaded after the basic filesystem has been loaded.
            earlyload: [
                "usr/bin/gcc",
                "usr/libexec/gcc/or1k-linux-musl/4.9.0/cc1",
                "usr/libexec/gcc/or1k-linux-musl/4.9.0/collect2",
                "usr/lib/libbfd-2.24.51.20140817.so",
                "usr/lib/gcc/or1k-linux-musl/4.9.0/libgcc.a",
                "usr/bin/as",
                "usr/include/stdio.h"
            ], // list of files which should be loaded immediately after they appear in the filesystem
            lazyloadimages: [
            ] // list of automatically loaded images after the basic filesystem has been loaded
        },

        term: null,             // canvas id for the terminal
        fbid: 'fb',                // canvas id for the framebuffer
        clipboardid: 'clipboard',  // input id for the clipboard
        statsid: 'stats',          // object id for the statistics test
        fps: 10, // update interval of framebuffer
        relayURL: '', // relay url for the network
        userid: '', // unique user id string. Empty, choosen randomly, from a url, or from a cookie.
        syncURL: '', // url to sync a certain folder
        path: 'app/jor1k-dep/bin/'
    };

    angular
        .module('jor1k.module')
        .value('jor1kConfig', config);


})();
