var gulp = require('gulp');
var uglifyjs = require('gulp-uglify');
var less = require('gulp-less');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var minifycss = require('gulp-minify-css');
var webserver = require("gulp-webserver");
var concat = require('gulp-concat');
var del = require('del');

var cssArr = [
    './app/assets/css/amend01.css',
    './app/assets/css/shortcodes.css',
    './app/assets/css/prettyPhoto.css',
    './app/assets/css/font-awesome.css',
    './app/assets/css/settings-panel.css',
    './app/assets/css/skeleton.css',
    './app/assets/css/base.css',
    './app/assets/css/style.css',
    './app/assets/css/mycss.css'
];

/* 合并压缩LESS
gulp.task('minifyless', function () {
    gulp.src('./app/src/less/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./app/assets/minicss'));
});
*/

/* 合并压缩CSS */
gulp.task('minifycss', function() {
    gulp.src(cssArr)                                        //压缩的文件
        .pipe(concat('main.css'))                           //合并
        .pipe(minifycss())                                  //执行压缩
        .pipe(gulp.dest('./app/assets/minicss'));           //输出文件夹
});

/* 合并js依赖 */
gulp.task('browserify', function() {
    browserify('./app/src/app.js')
        .transform(babelify)
        .bundle()
        .on('error',function(err){console.log(err.message)})
        .pipe(source('bundle.js'))
        //.pipe(uglifyjs())
        .pipe(gulp.dest('./app/build'));
});

/* 压缩js */
gulp.task('uglifyjs',function(){
    gulp.src('./app/build/*.js')
        .pipe(uglifyjs())
        .pipe(gulp.dest('./app/build'));
});

gulp.task('webserver', function() {
    gulp.src('./app')
        .pipe(webserver({
            host: 'localhost',
            port:8800,
            livereload: false
        })
    );
});

gulp.task("cleancss",function(cb){
    del(['./app/assets/minicss/*.css'], cb);
});

gulp.task("cleanjs",function(cb){
    del(['./app/build/*.js'], cb);
});

gulp.task("watchercss",function(){
    gulp.watch('./app/assets/css/*.css',['cleancss','minifycss']);
});

gulp.task("watcherjs",function(){
    gulp.watch('./app/src/**/*.js',['cleanjs','browserify','uglifyjs']);
});

gulp.task('default',['minifycss','browserify','uglifyjs','watchercss','watcherjs','webserver']);
