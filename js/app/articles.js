/**
 * An Ember route for the articles page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ArticlesIndexRoute = Ember.Route.extend({
  // Properties
  /**
   * The page title
   *
   * @memberof App.ArticlesIndexRoute
   * @instance
   * @type {string}
   */
  pageTitle: 'Articles',

  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.ArticlesIndexRoute
   * @instance
   * @returns {Array.<PostItem>}
   */
  model: function() {

    return App.Posts.findAll('articles');
  },
  /**
   * Render the posts template
   *
   * @memberof App.ArticlesIndexRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('posts');
  }
});

/**
 * An Ember route for a given articles page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.AticlesPageRoute = Ember.Route.extend({
  /**
   * Specify the route's model
   *
   * @memberof App.ArticlesPageRoute
   * @instance
   * @param {Object} params
   */
  model: function(params) {

    return App.Posts.findAll('articles', params.page_id);
  },
  /**
   * Render the posts template
   *
   * @memberof App.ArticlesPageRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('posts');
  }
})

/**
 * An Ember route for a single article page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ArticlesArticleRoute = Ember.Route.extend({
  /**
   * Render the post template
   *
   * @memberof App.ProjectsProjectRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('post');
  }
})