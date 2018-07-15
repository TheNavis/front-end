module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      mapping: {
        files: [
          {
            expand: true,
            cwd: 'src/styles/scss',
            src: ['**/*.scss'],
            dest: 'dist',
            ext: '.css'
          },
          {
            expand: true,
            cwd: 'src/styles/scss',
            src: ['**/*.scss'],
            dest: './src/styles/css',
            ext: '.css'
          },
        ]
      }
    },
    watch: {
      css: {
        files: [
          'src/styles/**/*.scss',
        ],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
}