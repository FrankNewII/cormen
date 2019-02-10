let gulp = require( 'gulp' ),
    open = require('gulp-open'),
    connect = require('gulp-connect');

let gulpConfig = {
    watchJS: 'app/algorithms/**.*js',
    devBaseUrl: 'http://localhost',
    port: 8000
};

gulp.task('watch', function () {
    gulp.watch(gulpConfig.watchJS, ['_reload']);
});

gulp.task('_reload', function () {
    connect.reload();
});

gulp.task('default', function () {
    connect.server({
        port: gulpConfig.port,
        base: gulpConfig.devBaseUrl,
        root: 'app',
        livereload: true
    });

    gulp.watch(gulpConfig.watchJS, ['_reload']);
});
