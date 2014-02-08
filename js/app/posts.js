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
   * @memberof App.Posts
   * @instance
   * @param {string} [category] A category to filter by
   * @param {number} [page] Which page of posts to return
   * @returns {Array.<Object>}
   */
  findAll: function(category, page) {

    return $.ajax('posts/posts.json', {
      // Temp: Set JSON type in global AJAX settings
      contentType: 'json'
      // End Temp
    }).then(
      // Success
      function(response) {

        var i = 0,
            posts = [],
            postsPerPage = App.get('postsPerPage') || 5,
            startPostIndex = 0,
            endPostIndex = 0;

        // Filter out any unwanted posts
        if (category) {

          for (i = 0; i < response.length; i++) {

            if (response[i].category === category) {

              posts.push(response[i]);
            }
          }

        } else {

          posts = response;
        }

        // Limit posts by page number
        if (page) {

          startPostIndex = (page - 1) * postsPerPage;
          endPostIndex = ((page + 1) * postsPerPage) - 1;

          posts = posts.slice(startPostIndex, endPostIndex);
        }

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
   * @memberof App.Post
   * @instance
   * @param {string} id The model's ID
   * @returns {Object}
   */
  find: function(id) {

    try {

      if (typeof id !== 'undefined') {

        return $.ajax('posts/' + id + '.json', {
          // Temp: Set JSON type in global AJAX settings
          contentType: 'json'
          // End Temp
        }).then(
          // Success
          function(response) {

            return response;
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