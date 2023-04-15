import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import del from 'del';
import browser from 'browser-sync';

// Styles
export const styles = () => {
	return gulp.src('src/scss/style.scss', {sourcemaps: true})
			.pipe(sass().on('error', sass.logError))
			.pipe(postcss([
				autoprefixer(),
				csso()
			]))
			.pipe(rename('style.min.css'))
			.pipe(gulp.dest('build/css', {sourcemaps: '.'}))
			.pipe(browser.stream());
}

// HTML
const html = () => {
	return gulp.src('src/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('build'));
}

// Scripts
export const scripts = () => {
	return gulp.src('src/js/*.js')
			.pipe(terser())
			.pipe(concat('main.min.js'))
			.pipe(gulp.dest('build/js'))
			.pipe(browser.stream());
}

// Clean
const clean = () => {
	return del('build');
};

// Server
const server = (done) => {
	browser.init({
		server: {
			baseDir: 'build'
		},
		cors: true,
		notify: false,
		ui: false,
	});
	done();
}

// Reload
const reload = (done) => {
	browser.reload();
	done();
}

// Watcher

const watcher = () => {
	gulp.watch('src/scss/*.scss', gulp.series(styles));
	gulp.watch('src/js/*.js', gulp.series(scripts));
	gulp.watch('src/*.html', gulp.series(html, reload));
}

// Build
export const build = gulp.series(
		clean,
		gulp.parallel(
				styles,
				html,
				scripts
		),
);

// Default

export default gulp.series(
		clean,
		gulp.parallel(
				styles,
				html,
				scripts,
		),
		gulp.series(
				server,
				watcher
		)
);
