module.exports = function(grunt) {

  grunt.config('express', {
      options: {
        script: '../web/backend/app.js'
      },
      dev: {
        options: {
          port: grunt.config.get('meta.port')
        }
      },
      prod: {
        options: {
          node_env: 'development'
        }
      }
    });

  grunt.loadNpmTasks('grunt-express-server');

};
