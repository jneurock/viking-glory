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

  vb.tasks.build.cb = function() {

    return gulp.src( vb.sources.html )
      .pipe( plugins.if( vb.prod, plugins.replace( /DEBUG\s=\strue/g, 'DEBUG = false' ) ) )
      .pipe( plugins.htmlbuild({
        // Process CSS
        css: plugins.htmlbuild.preprocess.css(function( block ) {

          block
            .pipe( vb.gulpSrc() )
            .pipe( plugins.sass() )
            .pipe( plugins.concat( vb.output.cssHash ) )
            .pipe( plugins.if( vb.prod, plugins.minifyCss() ) )
            .pipe( gulp.dest( vb.output.publish + vb.output.css ) );

          block.end( vb.output.css + vb.output.cssHash );

        }.bind( vb ) ),

        // Process JavaScript
        js: plugins.htmlbuild.preprocess.js(function( block ) {

          if ( !vb.prod ) {

            block
              .pipe( vb.gulpSrc( null, function( sources ) {

                block.end( vb.replaceJsSources( sources ) );

              }.bind( vb ) ) )
              .pipe( gulp.dest( vb.output.publish + vb.output.js ) );

          } else {

            block
              .pipe( vb.gulpSrc() )
              .pipe( plugins.uglify() )
              .pipe( plugins.concat( vb.output.jsHash ) )
              .pipe( gulp.dest( vb.output.publish + vb.output.js ) );

            block.end( vb.output.js + vb.output.jsHash );
          }

        }.bind( vb ) ),

        // Process jQuery 1x
        jqueryonex: plugins.htmlbuild.preprocess.js( function( block ) {

          vb.preprocessJsVendorCb.call( vb, block, vb.output.jquery1x );

        }.bind( vb ) ),

        // Process vendor scripts. Set output paths.
        jsvendor: plugins.htmlbuild.preprocess.js( function( block ) {

          vb.preprocessJsVendorCb.call( vb, block );

        }.bind( vb ) )
      }))
      .pipe( gulp.dest( vb.output.publish ) );
  };

  // Task updates
  vb.tasks.build.depends = [
    'css',
    'fonts',
    'handlebars',
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

  vb.tasks.handlebars.depends = ['img'];

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