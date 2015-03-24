var less = require('gulp-less'),
	gulp = require('gulp'),
    path = require('path');

var paths = {
    styles: 'less/*.less'
}

gulp.task('default', ['less'], function(){
	gulp.watch([paths.styles], ['less']);
});

gulp.task('less', function() {
    return gulp.src('less/qboot.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./build/'));
});
