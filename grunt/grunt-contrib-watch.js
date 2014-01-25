module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: [
        grunt.config.get('meta.dirs.public') + '/**/*.{js,html,css}',
        grunt.config.get('meta.dirs.root') + '/views/**/*',
        '!' + grunt.config.get('meta.dirs.js') + '/dist/*'
      ],
      tasks: ['compileAssets']
    },
    // jshint: {
    //   files: ['<%= jshint.config.src %>', '<%= jshint.app.src %>'],
    //   tasks: ['jshint']
    // },
    sass: {
      files: [grunt.config.get('meta.dirs.sass') + '/**/*'],
      tasks: ['compass', 'compileAssets']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};
