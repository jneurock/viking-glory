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
App.ArticlesPageRoute = Ember.Route.extend({
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
});

/**
 * An Ember route for a single article page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ArticlesArticleRoute = Ember.Route.extend({
  /**
   * The route's model
   *
   * @memberof App.ArticlesArticleRoute
   * @instance
   * @param {Object} params
   * @returns {Object}
   */
  model: function(params) {

    return App.Post.find(params.post_id, 'articles');
  },
  /**
   * Render the post template
   *
   * @memberof App.ArticlesArticleRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('post');
  }
});

/**
 * An Ember controller for the articles home page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.ArrayController
 */
App.ArticlesIndexController = Ember.ArrayController.extend({
  /**
   * Meta information about the page
   *
   * @memberof App.ArticlesIndexController
   * @instance
   * @type {Object}
   */
  meta: {
    title: 'Articles',
    description: 'Throughout my career I\'ve constantly made, and learned a great deal from, mistakes and discoveries. These articles are meant to share those things I\'ve learned as well as new ideas, techniques, technologies and other random thoughts.'
  }
});