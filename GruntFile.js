module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!\n' +
                    ' * <%= pkg.name %> v<%= pkg.version %> ' +
                    '(<%= grunt.template.today("yyyy-mm-dd") %>)\n' +
                    ' * <%= pkg.homepage %>\n' +
                    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                    ' Licensed <%= pkg.license %>\n' +
                    '*/'
            },
            files: {
                expand: true,
                cwd: 'src',
                src: ['**/*.js'],
                dest: 'dist',
                rename: function (dst, src) {
                    return dst + '/' + src.replace('.js', '.min.js');
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};
