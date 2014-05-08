module.exports = function(grunt) {

// 1. Toutes les configurations vont ici: 
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
        dist: {
	        src: [
	            'src/*.js', // tous les JS dans libs
	            'js/script.js'  // ce fichier là
	        ],
	        dest: 'js/build/production.js'
    	}
    },
	uglify: {
	    build: {
	        src: 'js/build/production.js',
	        dest: 'js/build/production.min.js'
	    }
	},
	less: {
		production: {
		    options: {
		      paths: ["assets/css"],
		      cleancss: true,
		    },
		    files: {
	     		"css/build/result.css": "css/styles.less"
	    	}
	      }
		},
	watch: {
	    scripts: {
	        files: ['js/*.js', 'css/styles.less'],
	        tasks: ['concat', 'uglify', 'less'],
	        options: {
	            spawn: false,
	        },
	    } 
	}

});

// 3. Nous disons à Grunt que nous voulons utiliser ce plug-in.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

// 4. Nous disons à Grunt quoi faire lorsque nous tapons "grunt" dans la console.
grunt.registerTask('default', ['concat', 'uglify', 'less']);

};