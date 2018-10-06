const sass = require("gulp-sass");
const gulp = require("gulp");
const run = require('gulp-run');
const multiProcess = require('gulp-multi-process');

gulp.task("client-scss", function () {
    return gulp.src("./scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./src/scss_dist"))
});

gulp.task('client-react', function () {
    return run('npm i && npm start').exec();
});

gulp.task('client-watch-scss', function () {
    return gulp.watch("scss/**/*.scss", ['client-scss']);
});

gulp.task('client-deploy', function() {
    return run('npm i && npm run build').exec();
})

gulp.task('client', ['client-scss'], function(cb) {
    return multiProcess([
        'client-react',
        'client-watch-scss',
    ], cb);
});

gulp.task('default', function (cb) {
    return multiProcess([
        'client',
    ], cb);
});
