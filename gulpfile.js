var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');

gulp.task ('css', function() {
  return gulp.src('src/styles/*')
  	.pipe(sass())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        port: 8080
    });

    gulp.watch(["dist/styles/*"], ['css']);
    gulp.watch(["src/styles/*"], ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('default', ['server']);