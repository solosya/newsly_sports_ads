// Ah, Big Gulp's eh? Welp, see ya later.
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  // c = require('chalk'),
  // clean = require('gulp-clean'),
  // imagemin = require('gulp-imagemin'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  // jshint = require('gulp-jshint'),
  // map = require('map-stream'),
  // minifyCss = require("gulp-minify-css"),

  notify = require('gulp-notify'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  server = lr(),
  browserSync = require('browser-sync').create(),
  plumber = require('gulp-plumber'),
  runSequence = require('run-sequence');

// BROWSER SYNC
// livereload({ start: true });
// browserSync.init({
//   proxy: "future.dev"
// });

gulp.task('styles', function(callback) {
  runSequence('sass', 'concat', 'minify-css', callback);
});

gulp.task('minify-css', function () {
  return gulp.src(['./static/css/index.css']) // path to your file
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('concat', function () {
  return gulp.src(['./static/css/index.css']) // path to your file
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('./static/css'));
});


gulp.task('sass', function(){
  return gulp.src('static/css/sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: 'expanded',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        onSuccess: function(){
          notify().write({ message: "SCSS Compiled successfully!" });
        },
        onError: function(err) {
          gutil.beep();
          notify().write(err);
        }
      })
    )
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('.'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe( gulp.dest('static/css') );
});


// Do the creep, ahhhhhhh! (http://youtu.be/tLPZmPaHme0?t=7s)
gulp.task('watch', function() {

  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }

    // Watch .scss files
    gulp.watch('static/css/sass/**/*.scss', ['styles']);
    gulp.watch("**/*.twig", ['reload']);

  });

});

// Gulp Default Task
gulp.task('default', [ 'styles', 'watch']);
