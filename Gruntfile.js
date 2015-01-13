'use strict';

module.exports = function(grunt) {

    var bannerText = '/* <%= pkg.name %> - v<%= pkg.version %> | ' +
        'Copyright (C) <%= grunt.template.today("yyyy/mm/dd") %> SETLEVEL, LLC. All rights reserved.*/',
        banner = bannerText + '\n',
        bannerCSS = bannerText;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Clean dist folder
        clean: {
            output: ['js/*', 'css/*']
        },

        // Concatinate files and copy them into dist folder
        concat: {
            options: {
                stripBanners: true,
                banner: banner,
                separator: '\n',
            },
            dist: {
                files: {
                    'js/built.js': ['_developmentSource/js/models/*', '_developmentSource/js/views/*', '_developmentSource/js/controllers/*.js'],
                    'css/built.css': ['_developmentSource/css/*']
                }
            },
        },

        // Compress JS files
        uglify: {
            options: {
                banner: banner,
                mangle: true
            },
            my_target: {
                files: {
                    'js/built-min.js': ['js/built.js']
                }
            }
        },

        // Compress CSS files
        cssmin: {
            options: {
                banner: bannerCSS
            },
            my_target: {
                src: 'css/built.css',
                dest: 'css/built-min.css'
            }
        },

        // Watch for modifications
        watch: {
            options: {
                livereload: true
            },
            configFiles: {
                files: ['_developmentSource/**/*'],
                tasks: ['clean', 'concat', 'uglify', 'cssmin']
            }
        },

        // Refresh browser
        browserSync: {
            bsFiles: {
                src: ['*.*', 'js/built-min.js', 'css/built-min.css']
            },
            options: {
                proxy: "localhost:8888",
                watchTask: true // < VERY important
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask("default", ['browserSync', 'watch']);
};