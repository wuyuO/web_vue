import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'

gulp.task('transform',() => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('watch',() => {
  return gulp.src('src/**/*.js')
    .pipe(watch('src/**/*.js',{
        verbose:true
      }))
    .pipe(babel())
    .pipe(gulp.dest('lib'));
})

gulp.task('default',() => {
  gulp.start('transform');
});