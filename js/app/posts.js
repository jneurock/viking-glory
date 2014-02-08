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
   * @returns {Array.<Object>}
   */
  findAll: function() {

    return $.ajax('posts/posts.json', {
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