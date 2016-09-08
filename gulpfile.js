/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'prime';

gulp.task('iconfont', function () {
    gulp.src(['src/assets/images/icons/svg/*.svg'])
            .pipe(iconfontCss({
                fontName: fontName,
                path: 'src/assets/templates/css/_prime.scss',
                targetPath: '../css/fonts/_prime.scss',
                fontPath: '../assets/fonts/'
            }))
            .pipe(iconfont({
                fontName: fontName
            }))
            .pipe(gulp.dest('src/assets/fonts/'));
});