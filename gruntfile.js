module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },
    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'sass/style.sass'
  			}
  		}
  	},
  	watch: {
	    scripts: {
	        files: ['sass/*.sass'],
	        tasks: ['sass'],
	        options: {
	            spawn: false,
	        },
	    } 
	},
	browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['sass', 'jshint', 'browserSync', 'watch']);

};