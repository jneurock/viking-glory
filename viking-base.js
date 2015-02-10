module.exports = function( gulp, plugins, vb, cb ) {

  // Output updates
  vb.output.fonts = 'fonts/';
  vb.output.img = 'img/';
  vb.output.post = 'posts/';
  vb.output.posts = 'posts.json';

  // Source updates
  vb.sources.fonts = 'fonts/**/*';
  vb.sources.img = 'img/**/*';
  vb.sources.posts = 'posts/**/*.md';

  vb.preBuild = function() {

    return plugins.if( vb.prod, plugins.replace( /DEBUG\s=\strue/g, 'DEBUG = false' ) );
  };

  // Task updates
  vb.tasks.build.depends = [
    'css',
    'fonts',
    'htmlbars',
    'img',
    'js-doc',
    'posts',
    'root'
  ];

  vb.tasks.fonts = {
    cb: function() {

      return gulp.src( vb.sources.fonts )
        .pipe( gulp.dest( vb.output.publish + vb.output.fonts ) );
    }
  };

  vb.tasks.htmlbars.depends = ['img'];

  vb.tasks.img = {
    cb: function() {

      return gulp.src( vb.sources.img )
        .pipe( gulp.dest( vb.output.publish + vb.output.img ) );
    }
  };

  vb.tasks.posts = {
    cb: function() {

      var concatOpts = {
            newLine: ','
          },
          vbOpts = {
            highlightSyntax: true
          },
          vbConcatOpts = {
            concat: true
          };

      return gulp.src( vb.sources.posts )
        .pipe( plugins.vikingPosts( vbOpts ) )
        .pipe( gulp.dest( vb.output.publish + vb.output.post ) )
        .pipe( plugins.concat( vb.output.posts, concatOpts ) )
        .pipe( plugins.vikingPosts( vbConcatOpts ) )
        .pipe( gulp.dest( vb.output.publish + vb.output.post ) );
    }
  };

  cb();
};