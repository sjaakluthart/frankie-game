'use strict';

var babelify = require('babelify'),
  banner,
  bowerBanner,
  bowerPkg = require('./bower.json'),
  browserify = require('browserify'),
  browserSync = require('browser-sync'),
  changed = require('gulp-changed'),
  concat = require('gulp-concat'),
  es2015 = require('babel-preset-es2015'),
  ftp = require('gulp-ftp'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  header = require('gulp-header'),
  htmlreplace = require('gulp-html-replace'),
  mainBowerFiles = require('main-bower-files'),
  notify = require('gulp-notify'),
  path,
  pkg = require('./package.json'),
  react = require('babel-preset-react'),
  rename = require('gulp-rename'),
  reload = browserSync.reload,
  sass = require('gulp-ruby-sass'),
  scsslint = require('gulp-scss-lint'),
  settings = require('./settings.json'),
  streamify = require('gulp-streamify'),
  source = require('vinyl-source-stream'),
  tar = require('gulp-tar'),
  uglify = require('gulp-uglify'),
  watchify = require('watchify');

path = {
  HTML: 'src/index.html',
  ASSETS: ['src/assets/img/**/*', 'src/assets/favicon/**/*', 'src/assets/fonts/**/*'],
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  ASSETS_DEST: 'dist/assets',
  DEST: 'dist',
  ENTRY_POINT: './src/app/app.jsx'
};

// Header for app.min.js
banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @dependencies : <%= JSON.stringify(pkg.dependencies) %>',
  ' * @link <%= pkg.homepage %>',
  ' * @author <%= pkg.author %>',
  ' * @git <%= pkg.repository.url %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

// Header for bower_components.js
bowerBanner = ['/**',
  ' * Bower Components',
  ' * @dependencies : <%= JSON.stringify(pkg.dependencies) %>',
  ' */',
  ''].join('\n');

// TODO Add jsx code styling checks

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function productionBuild(file) {
  var props = {
    entries: ['./src/app/' + file],
    debug : false,
    transform: [[babelify, {presets: [es2015, react]}]]
  };
  var bundler = browserify(props);
  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(path.MINIFIED_OUT))
      .pipe(streamify(uglify()))
      .pipe(header(banner, {pkg : pkg}))
      .pipe(gulp.dest(path.DEST))
  }
  return rebundle();
}

function developmentBuild(file) {
  var props = {
    entries: ['./src/app/' + file],
    debug : true,
    transform: [[babelify, {presets: [es2015, react]}]]
  };
  // watchify()
  var bundler = watchify(browserify(props));
  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST));
  }
  // listen for an update and run rebundle
  bundler.on('update', function() {
    var started = new Date();
    rebundle();
    var finished = new Date();
    gutil.log('Rebundled after ' + (finished - started) + 'ms.');
  });
  // run it once the first time buildScript is called
  return rebundle();
}

// Check scss code styling
gulp.task('scss', function() {
  return gulp.src([
    'src/**/*.scss',
    '!**/bourbon/**',
    '!**/animatewithsass/**',
    '!**/meyer-reset.scss'
  ])
    .on('error', handleErrors)
    .pipe(scsslint({
      'config': 'scss-lint.yml',
      'maxBuffer': 1307200
    }));
});

gulp.task('bower', function() {
  return gulp.src(mainBowerFiles())
    .on('error', handleErrors)
    .pipe(concat('bower_components.js'))
    .pipe(uglify())
    .pipe(header(bowerBanner, {pkg : bowerPkg}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function() {
  return sass('src/sass/style.scss', {style: 'compressed'})
    .on('error', handleErrors)
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .on('error', handleErrors)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('assets', function() {
  gulp.src(path.ASSETS)
    .pipe(changed(path.ASSETS_DEST))
    .on('error', handleErrors)
    .pipe(gulp.dest(path.ASSETS_DEST));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .on('error', handleErrors)
    .pipe(htmlreplace({
      'js': path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch(path.ASSETS, ['assets']);
});

// Create production build
gulp.task('production', ['replaceHTML', 'bower', 'sass', 'assets'], function() {
  return productionBuild('app.jsx');
});

// Create development build, watch for changes
gulp.task('dev', ['watch', 'copy', 'bower', 'sass', 'assets'], function() {
  return developmentBuild('app.jsx');
});

// View the project in the browser with live reloading from browserSync
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch(['*.html', 'style.css', 'build.js', 'build.min.js', 'assets/**/*'], {cwd: 'dist'}, reload).on('error', handleErrors);
});

// Generate an archive.zip
gulp.task('compress', ['production'], function() {
  return gulp.src([
    'dist/**/*',
    '!dist/src/',
    '!dist/src/**/*'
  ])
    .on('error', handleErrors)
    .pipe(tar('archive.zip'))
    .pipe(gulp.dest('compressed'));
});

// Deploy the project using ftp excluding the development files
gulp.task('deploy', ['production'], function() {
  return gulp.src([
    'dist/**/*',
    '!src/src/',
    '!src/src/**/*'
  ])
    .on('error', handleErrors)
    .pipe(ftp({
      host: settings.host,
      user: settings.user,
      pass: settings.pass,
      remotePath: settings.remotePath
    }))
    .pipe(gutil.noop());
});
