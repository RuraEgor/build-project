var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minityCss = require('gulp-minify-css');


gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(minityCss())
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/css'))
        .pipe(notify('Done!'));
});


gulp.task("watch", function(){
    gulp.watch('css/*.css', ['default'])
})