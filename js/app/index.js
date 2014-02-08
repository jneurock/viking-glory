/**
 * An Ember route for the home page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.IndexRoute = Ember.Route.extend({
  /**
   * Specify the route's model
   *
   * @memberof App.IndexRoute
   * @instance
   * @returns {Array.<PostItem>}
   */
  model: function() {

    return App.Posts.findAll();
  },
  /**
   * Render the posts template instead of the index template
   *
   * @memberof App.IndexRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('posts');
  }
});