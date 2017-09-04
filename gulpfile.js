var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');


var paths = {
    styles: {
        src: 'scss/*.scss',
        dest: 'output/'
    },
    scripts: {
        src: 'js/*.js',
        dest: 'output/'
    }

}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }) )
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
}

function clean() {
    return del('output');
}

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    browserSync.watch(['./*.html', './output/**/*.*'], browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.watch = watch;

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles,scripts)
))

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles,scripts),
    gulp.parallel(watch,serve),
))
