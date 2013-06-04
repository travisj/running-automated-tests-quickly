module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jasmine: {
			examples: 'src/**/*.js',
			options: {
				specs: 'spec/**/*.js',
				keepAlive: true,
				onfail: ['notify:fail']
			}
		},
		connect: {
			presentation: {
				options: {
					port: 8559,
					base: 'public/'
				}
			}
		},
		regarde: {
			tests: {
				files: ['src/**', 'spec/**'],
				tasks: ['test']
			},
			presentation: {
				files: ['src/**'],
				tasks: ['build']
			}
		},
		clean: {
			build: 'public'
		},
		copy: {
			build: {
				files: [
					{expand: true, cwd: 'src/', src: ['**'], dest: 'public'},
					{expand: true, src: ['lib/**', 'spec/**'], dest: 'public'},
					{expand: true, cwd: 'node_modules/marked/lib/', src: ['**'], dest: 'public/lib'}
				]
			}
		},
		notify: {
			fail: {
				options: {
					title: "Test Failed",
					message: "test failed"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('test', ['jasmine']);
	grunt.registerTask('test-reload', ['test', 'regarde:tests']);

	// for presentation
	grunt.loadNpmTasks('grunt-contrib');
	grunt.registerTask('build', ['clean:build', 'copy:build']);
	grunt.registerTask('presentation', ['build', 'connect', 'regarde:presentation']);

	grunt.task.registerTask('echo', 'a test from travis', function() {
		grunt.log.writeln('echo');
	});
};
