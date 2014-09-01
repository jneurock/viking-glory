/**
 * The posts model
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */
App.Posts = Ember.Object.extend();

App.Posts.reopenClass({
  /**
   * Find all posts and optionally filter by category
   * 
   * @memberof App.Posts
   * @instance
   * @param {string} [category] A category to filter by
   * @param {number} [page] Which page of posts to return
   * @returns {Array.<Object>}
   */
  findAll: function(category, page) {

    var options = {
          context: this
        };

    return $.ajax('posts/posts.json', options).then(
      // Success
      function(response) {

        var endPostIndex = 0,
            i = 0,
            len = response.length,
            post = null,
            posts = [],
            postsPerPage = App.get('postsPerPage') || 5,
            startPostIndex = 0;

        for (i = 0; i < len; i++) {

          post = response[i];

          // Add "path" property to post
          post.path = post.category + '.' + post.category.slice(0, -1);

          // Filter out any unwanted posts
          if (!category || post.category === category) {

            App.Post.adaptTags(post);

            posts.push(post);
          }
        }

        // Limit posts by page number
        if (page) {

          startPostIndex = (page - 1) * postsPerPage;
          endPostIndex = ((page + 1) * postsPerPage) - 1;

          posts = posts.slice(startPostIndex, endPostIndex);
        }

        // Decorate last post to indicate it is the last one in list
        posts[posts.length - 1].last = true;

        return posts;
      },

      // Fail
      function() {

        if (DEBUG) {

          console.error('App.Posts.findAll: AJAX error');
        }
      }
    );
  }
});

/**
 * The post model
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */
App.Post = Ember.Object.extend();

App.Post.reopenClass({
  /**
   * Transform comma separated tags into an array
   *
   * @memberof App.Post
   * @instance
   * @param {Object} post The post object
   */
  adaptTags: function(post) {

    try {

      var i = 0,
          tags = post.tags ? post.tags.split(',') : [],
          len = tags.length;

      for (i = 0; i < len; i++) {

        tags[i] = tags[i].trim();
      }

      post.tags = tags;

    } catch(e) {

      if (DEBUG) {

        console.error('App.Post.adaptTags:');
        console.error(e);
      }
    }
  },
  /**
   * @memberof App.Post
   * @instance
   * @param {string} id The model's ID
   * @param {string} [category] The optional post category
   * @returns {Object}
   */
  find: function(id, category) {

    try {

      if (id) {

        category = category ? category + '/' : '';

        return $.ajax('posts/' + category + id + '.json').then(
          // Success
          function(post) {

            App.setPageTitle(post.title);

            App.Post.adaptTags(post);

            // Indicate this is the last post so no border is added
            post.last = true;

            return post;
          },

          // Fail
          function() {

            if (DEBUG) {

              console.error('App.Post.find: AJAX error');
            }
          }
        );

      } else {

        throw 'Missing ID';
      }

    } catch(e) {

      if (DEBUG) {

        console.error('App.Post.find:');
        console.error(e);
      }
    }
  }
});