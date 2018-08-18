const gulp = require ('gulp');

//定义一个任务输出一个值
gulp.task('hello',function(){
	console.log('hello bee');
});

//拷贝文件
gulp.task('dest',function(){
	gulp.src('src/*/*.*')
	    .pipe(gulp.dest('dist/'));
});

//监视任务
gulp.task('default',function(){
	gulp.watch('src/*',['dest']);
});

//导入模块
const less = require('gulp-less')
gulp.task('style',function(){
	gulp.src('src/*/*.less')
	//让less转换为css文件  使用gulp-less插件
		.pipe(less())
	    .pipe(gulp.dest('dist/'));
});

//外面单独写watch，可以实现实时更新less转为css
gulp.task('watch',function(){
	gulp.watch('src/*/*.less',['style']);
});

//定义一个http服务器
const connect = require('gulp-connect');
 
gulp.task('serve', function() {
  connect.server({
  	root: 'public',
  	livereload: true
});

  gulp.watch('public/*.html',['reload']);
});

gulp.task('reload',function(){
	gulp.src('public/*.html')
    .pipe(connect.reload());
});
