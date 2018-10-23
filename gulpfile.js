var gulp = require('gulp')
var clean = require('gulp-clean')
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var minidist = require('./package.json').miniprogram || 'miniprogram_dist'
var dist = 'dist'
gulp.task('clean', function () {
    return gulp.src([minidist, dist], { read: false }).pipe(clean())
})
gulp.task('ignore', function () {
    return gulp.src(`${minidist}/**/*.d.ts`, { read: false }).pipe(clean())
})
gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(minidist))
        .pipe(gulp.dest(dist));
});
gulp.task('copy', function () {
    return gulp
        .src(['**/*', '!**/*.ts',], { base: 'src' })
        .pipe(gulp.dest(minidist))
});
gulp.task('test', function () {
    return gulp
        .src([`${minidist}/**/*`])
        .pipe(gulp.dest('test/miniprogram_npm/wecp'))
});
gulp.task('default', gulp.series('clean', 'build', 'ignore', 'copy', 'test'));