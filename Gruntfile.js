'use strict';

module.exports = function(grunt){
  
  grunt.initConfig({
    jshint : {
      all : {
	files : {
	  src : ['package.json', 'index.js', 'tests/index.js']
	},
	options : {
	}
      }
    },
    qunit : {
      all : ['tests/*.html']
    }
  });

//  grunt.loadNpmTasks('grunt-cafe-mocha');
//  grunt.renameTask('cafemocha', 'test');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['jshint', 'qunit']);
};
