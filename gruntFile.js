module.exports = function(grunt){
	grunt.initConfig({
		uglify:{
			my_target: {
				files: [{
					src: 'js/*.js',
					dest: 'jsmin/',
					expand: true,
					flaten: true,    // remove unnecessary spances and new lines
					ext: '.min.js'   //this wil be the extesnion of minified files
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['uglify']);
};