module.exports = function(grunt) {

  var rootDir = grunt.config.get('meta.dirs.root');

  grunt.config('nodemon', {
    dev: {
      options: {
        file: rootDir + '/app.js',
        env: {
          PORT: grunt.config.get('meta.port')
        },
        args: ['--verbose'],
        ignoredFiles: [rootDir + '/.tmp/*', rootDir + '/.git/*', rootDir + '/views/*', rootDir + '/assets']
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');

};
