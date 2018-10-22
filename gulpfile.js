var gulp = require('gulp')
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var dist = require('./package.json').miniprogram || 'miniprogram_dist'
gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(dist));
});
// gulp.task("npm", function () {
//     return tsProject.src()
//         .pipe(tsProject()).dts
//         .pipe(gulp.dest('.'));
// });
gulp.task('copy', function () {
    return gulp
        .src(['**/*', '!**/*.ts',], { base: 'src' })
        .pipe(gulp.dest(dist))
});
gulp.task('test', function () {
    return gulp
        .src([`${dist}/**/*`])
        .pipe(gulp.dest('test/miniprogram_npm/wecp'))
});
gulp.task('default', gulp.series(gulp.parallel('build', 'copy'), 'test'));