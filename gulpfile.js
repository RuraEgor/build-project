var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minityCss = require('gulp-minify-css'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    useref = require('gulp-useref');


gulp.task('default', function () {
    return gulp.src('scss/*.scss')
        //.pipe(concatCss("bundle.css"))
        //.pipe(csso())
        .pipe(sass())
        .pipe(minityCss())
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/css'))
        .pipe(notify('Done!'))
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(minityCss())
        .pipe(rename("bundle7777.min.css"))
        .pipe(gulp.dest('app/css'))
        .pipe(notify('Done888!'));
});


gulp.task("watch", function(){
    gulp.watch('scss/*.scss', ['default'])
    gulp.watch('css/*.css', ['css'])
})


////---------------
//
//gulp.task("html", function(){
//   var assets = useref.assets();
//
//    return gulp.src("app/* .html")
//        .pipe(assents)
//        .pipe(gulpif('*.js', uglify()))
//        .pipe(gulpif('*.css', minifyCss()))
//        .pipe(assets.restore())
//        .pipe(useref())
//        .pipe(gulp.dest('dist'));
//});
//
//
//gulp.task('bower',function(){
//    gulp.src('./app/index.html')
//        .pipe(wiredep({
//            directory : "app/bower_components"
//        }))
//        .pipe(gulp.dest('./app'))
//});
//
//gulp.task("watch", function () {
//    gulp.watch('bower.json', ['bower'])
//})