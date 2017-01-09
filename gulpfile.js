var gulp = require("gulp");
var prefixer = require("gulp-autoprefixer");
var cleanCSS = require('gulp-clean-css');

var cssUrl = "css/style.css";

gulp.task('format-css', function() {
  return gulp.src(cssUrl)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(prefixer())
    .pipe(gulp.dest('build'));
});

gulp.task("watcher", function(){
	gulp.watch(cssUrl, ["format-css"]);
});