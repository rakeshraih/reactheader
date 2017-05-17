var async = require('async');
var autoprefixer = require('gulp-autoprefixer');
var fs = require('fs-extra');
var glob = require('wildglob');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

var scssGlob = [
	'./src/scss/**/*.scss'
];

var sassConfig = {
    'default-encoding': 'UTF-8',
    sourcemap: false
};

// sass
gulp.task('sass', function() {
	//assets.getAssetsForCollection('sass', function(err, sassLoadPaths) {
	//	sassConfig.includePaths = sassLoadPaths;
		return gulp.src(scssGlob)
			.pipe(sass(sassConfig)
			.on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(rename({suffix: '.built'}))
			.pipe(gulp.dest('./build/styles/'))
            .on('error', swallowError);
	//});
});

//js
gulp.task('js', function() {
	return gulp.src('./src/js/client.js')
  	.pipe(webpack( require('./webpack.config.js') ))
  	    .on('error', swallowError)
		.pipe(rename({suffix: '.built'}))
		.pipe(gulp.dest('./build/scripts'));
});



// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['src/js/*.js','src/js/components/*.js','src/js/components/mobile/*.js','src/js/components/desktop/*.js','src/js/util/*.js','src/js/util/desktop/*.js','src/js/util/mobile/*.js'], ['js']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/root/*.*', ['root']);
});

gulp.task('webserver', function() {

  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('root', function() {
  gulp.src(['./src/root/index.html'])
    .pipe(gulp.dest('./build'));
});

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}

//gulp.task('default', ['sass', 'js','watch','root','webserver']);
gulp.task('default', ['sass', 'js','root']);