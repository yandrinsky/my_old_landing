var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var del = require('del');
var browserSync = require('browser-sync').create();

var cssFiles = [
	'./src/css/main.css',
	'./src/css/media.css'
]


var jsFiles = [
	'./src/js/lib.js',
	'./src/js/main.js'
]

function styles() {
	return gulp.src(cssFiles)

	//.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	//собираем файлы в один
	.pipe(concat('style.css'))  
	//добавляем префиксы
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))

	//Минификация css
	/*.pipe(cleanCSS({
		level: 2
	}))*/
	//выводим файлы 
	.pipe(gulp.dest('./build/css'))

	.pipe(browserSync.stream());
}



function scripts() {
	return gulp.src(jsFiles)

	.pipe(concat('script.js'))

	/*.pipe(uglify({
		toplevel: true
	}))*/

	.pipe(gulp.dest('./build/js'))

	.pipe(browserSync.stream());
}

function clean() {
	 return del(['build/*']);
}

function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    //Следим за css файлами
    gulp.watch('./src/css/**/*.css', styles)
     //Следим за js файлами
    gulp.watch('./src/js/**/*.js', scripts)
    //Следим за html файлами
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('del', clean);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));

gulp.task('dev', gulp.series('build', 'watch'));