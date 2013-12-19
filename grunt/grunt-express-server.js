module.exports = function(grunt) {

  grunt.config('express', {
      options: {
        script: grunt.config.get('meta.serverPath')
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
