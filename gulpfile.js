//Use the required plugins
var gulp = require('gulp');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');




//For server hosting use BrowserSync
gulp.task('browserSync', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app',
        }
    });
});

/****************************************

Use this command "gulp serve" to host the app on local server.


****************************************/

gulp.task('serve', ['browserSync'], function() {
    // Reloads the browser whenever HTML or JS or CSS files change and Uses browserSync.reload to reload the browser
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/sass/*.scss',['styles'],browserSync.reload);

});



gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        //Uses annotation for possible injection errors
        .pipe(gulpIf('*.js', ngAnnotate()))
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});


//This sub-task cleans the distribution folder everytime before "gulp build is used"
gulp.task('clean:dist', function() {
    return del.sync('dist/*');
});

//This sub-task pipes the images to dist folder
gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('imagesService', function() {
    return gulp.src('app/js/services/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

//This sub-task pipes all the views to the dist folder
gulp.task('views', function() {
    return gulp.src('app/views/*')
        .pipe(gulp.dest('dist/views'));
});



gulp.task('styles', function() {
    gulp.src('app/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});


//This sub-task pipes all fonts to the dist folder
gulp.task('fonts', function() {
    return gulp.src('app/fonts')
        .pipe(gulp.dest('dist/fonts'))
})

//This sub-task pipes the index.html and the icons to the dist folder
gulp.task('index', function() {
    return gulp.src('app/*.png')
        .pipe(gulp.dest('dist/'));
});



gulp.task('build', function(callback) {
    runSequence('clean:dist', ['useref', 'images','imagesService', 'views',  'styles' ,'index'],
        callback
    );
});
