module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jasmine: {
			src: 'src/**/*.js',
			options: {
				specs: 'spec/**/*.js',
				keepAlive: true,
				onfail: ['notify:fail']
			}
		},
		livereload: {
			port: 35729
		},
		connect: {
			tests: {
				options: {
					port: 8558,
					base: 'public/',
					middleware: function(connect, options) {
						return [
							require('grunt-contrib/node_modules/grunt-contrib-livereload/lib/utils').livereloadSnippet, 
							connect.static(require('path').resolve(options.base))
						];
					}
				}
			},
			presentation: {
				options: {
					port: 8559,
					base: 'public/'
				}
			}
		},
		regarde: {
			all: {
				files: ['src/**', 'spec/**'],
				tasks: ['build', 'livereload']
			},
			cli: {
				files: ['src/**', 'spec/**'],
				tasks: ['test']
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
	//grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('test', ['jasmine']);
	grunt.registerTask('test-reload', ['regarde:cli']);
	grunt.registerTask('build', ['clean:build', 'copy:build']);
	grunt.registerTask('dev', ['livereload-start', 'connect', 'build', 'regarde:all']);

	grunt.task.registerTask('travis', 'a test from travis', function() {
		grunt.log.writeln('holla');
	});
};
