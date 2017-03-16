var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel')

gulp.task('sass', function(){
  gulp.src([
    './style/reset/reset.css',
    './style/*.scss',
    // './styles/**/*.scss
  ])
 .pipe(sass().on('error', sass.logError))
 .pipe(concat('all.css'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('js', function() {
  gulp.src(['./app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'));
})


gulp.task('watch', function(){
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./style/*.scss', ['sass']); 
})
  

gulp.task('default', ['js', 'sass', 'watch']);
