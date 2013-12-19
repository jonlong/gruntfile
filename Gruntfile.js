module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
    meta: {
      port: '3000',
      serverPath: 'index.js'
    }
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Register alias tasks.
  // grunt.registerTask('build',
  //   'Build site files for testing or deployment.',
  //   ['jshint', 'clean', 'jade:prod', 'requirejs:prod', 'stylus:prod']);

  // grunt.registerTask('deploy',
  //   'Deploy site via gh-pages.',
  //   ['build', 'gh-pages']);

  grunt.registerTask('dev',
    'Start an express webserver on localhost.',
    ['express']);

  // grunt.registerTask('prod',
  //   'Publish to build/wwwroot and start a webserver on localhost.',
  //   ['build', 'connect:prod:keepalive']);

  grunt.registerTask('default', ['dev']);

};