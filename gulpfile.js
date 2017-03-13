var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('dist/style/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/style/css'))
});

gulp.task('watch', function(){
  gulp.watch('dist/style/*.scss', ['sass']); 
  // Other watchers
})