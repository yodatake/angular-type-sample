var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var conf = require('./conf');
var path = require('path');
var outputPath = path.join(conf.paths.doc, '/sc5/app');
var overviewPath = path.join(conf.paths.doc, '/sc5/README.md');
var appPath = path.join(conf.paths.src, '/app/**/*.scss');

gulp.task('styleguide:generate', function() {
  return gulp.src(appPath)
    .pipe(styleguide.generate({
        title: 'Yoda-Style',
        server: true,
        port: 3002,
        rootPath: outputPath,
        overviewPath: overviewPath
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('sc5-watch', ['styleguide'], function() {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch([appPath], ['styleguide']);
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);
