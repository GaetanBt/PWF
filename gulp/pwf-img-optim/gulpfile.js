var gulp     = require('gulp'),
    
    clean    = require('gulp-clean'),
    imgOptim = require('gulp-imagemin');

var paths = {

  images    : './img/',
  imagesMin : './imgMin/'
  
};

gulp.task('default', function(){
  
  // Clean the destination folder before the optimization
  gulp.src(paths.imagesMin)
    .pipe(clean());
  
  // Optimize images & send them in the imgMin folder
  gulp.src(paths.images + '**/*')
    .pipe(imgOptim({read: false}))
    .pipe(gulp.dest(paths.imagesMin));
  
});