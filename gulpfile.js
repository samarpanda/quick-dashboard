var gulp = require('gulp');
var shell = require('gulp-shell');
var atlasboard = require('atlasboard');

gulp.task('addjob', shell.task([
	"atlasboard generate job "
]));

gulp.task('addwidget', function(){
	//console.log(process.argv[4]);
	console.log(process.argv);
});

gulp.task('me', shell.task([
	"atlasboard generate job "+process.argv[3]
]));