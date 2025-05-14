const gulp = require('gulp');
const concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');

// 자바스크립트 파일을 병합
gulp.task('concat', function () {
    return gulp.src(['styles/src/**/*.css', '!styles/**/*.min.css', '!styles/src/ids.css', '!styles/src/icon.css'])
        .pipe(uglifycss())
        .pipe(concat('ids.min.css'))
        .pipe(gulp.dest('styles/'));
});
// 자바스크립트 파일을 병합
gulp.task('icon', function () {
    return gulp.src(['styles/src/icon.css'])
        .pipe(uglifycss())
        .pipe(concat('icon.min.css'))
        .pipe(gulp.dest('styles/'));
});

gulp.task('default', gulp.series('concat', 'icon'));