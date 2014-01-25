module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    meta: {
      port: '3000',
      dirs: {
        root: '.',
        public: './assets',
        css: './assets/custom/css',
        images: './assets/custom/images',
        js: './assets/custom/js',
        sass: './sass',
      }
    }
  });

  // Load per-task config from separate files.
  grunt.loadTasks('./grunt');

  grunt.registerTask('default', [
    'compileAssets'
  ]);

  grunt.registerTask('compileAssets', [
    'browserify',
    'copy:dev'
  ]);

  // When Sails is lifted in development
  grunt.registerTask('dev',
    'Start a live-reloading dev webserver on localhost.', ['default', 'concurrent']);
};
