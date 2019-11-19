const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const uglify = require('gulp-uglify');
const del = require('del');

const cssFiles = [
	'./src/scss/normalize.scss',
	'./src/scss/styles.scss'
];

const jsFiles = [
	'./src/scripts/scripts.js',
];

function styles() {
	return gulp.src(cssFiles)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('styles.css'))
	.pipe(cleanCSS({
		level: 2
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./dist/styles/'))
}

function scripts() {
	return gulp.src(jsFiles)
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('./dist/scripts/'))
}

function clean() {
	return del(['dist/*'])
}

function watch() {
	gulp.watch('./src/scss/*.scss', styles);
	gulp.watch('./src/scripts/*.js', scripts);
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);

gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));