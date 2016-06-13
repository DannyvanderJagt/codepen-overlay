const Path = require('path');
const Gulp = require('gulp');
const Sass = require('gulp-sass');
const AutoPrefixer = require('gulp-autoprefixer');
const Pug = require('gulp-pug');
const Watch = require('gulp-watch');
const Plumber = require('gulp-plumber');

const paths = {
  pug: {
    input: Path.join(__dirname, './src/index.pug'),
    output: Path.join(__dirname, './dist'),
  },
  scss: {
    input: Path.join(__dirname, './src/styles/*.scss'),
    output: Path.join(__dirname, './dist/styles'),
  },
  images:{
    input: Path.join(__dirname, './src/images/*.*'),
    output: Path.join(__dirname, './dist/images')
  }
};


Gulp.task('pug', () => {
  return Gulp.src(paths.pug.input)
    .pipe(Plumber())
    .pipe(Pug())
    .pipe(Gulp.dest(paths.pug.output))
})

Gulp.task('scss', () => {
  return Gulp.src(paths.scss.input)
    .pipe(Plumber())
    .pipe(Sass())
    .pipe(AutoPrefixer())
    .pipe(Gulp.dest(paths.scss.output))
});

Gulp.task('images', () => {
  return Gulp.src(paths.images.input)
    .pipe(Gulp.dest(paths.images.output))
});

Gulp.task('watch', () => {
  Gulp.watch([paths.pug.input], ['pug']);
  Gulp.watch(paths.scss.input, ['scss']);
  Gulp.watch(paths.images.input, ['images'])
})



Gulp.task('default', ['pug', 'scss', 'images' ,'watch'])