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

  // Task updates
  vb.tasks.build.depends = [
    'fonts',
    'handlebars',
    'img',
    'js-doc',
    'posts',
    'root'
  ];

  vb.tasks.fonts = {
    cb: function() {

      return gulp.src( this.sources.fonts )
        .pipe( gulp.dest( this.output.publish + this.output.fonts ) );
    }
  };

  vb.tasks.handlebars.depends = ['img'];

  vb.tasks.img = {
    cb: function() {

      return gulp.src( this.sources.img )
        .pipe( gulp.dest( this.output.publish + this.output.img ) );
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

      return gulp.src( this.sources.posts )
        .pipe( plugins.vikingPosts( vbOpts ) )
        .pipe( gulp.dest( this.output.publish + this.output.post ) )
        .pipe( plugins.concat( this.output.posts, concatOpts ) )
        .pipe( plugins.vikingPosts( vbConcatOpts ) )
        .pipe( gulp.dest( this.output.publish + this.output.post ) );
    }
  };

  cb();
};