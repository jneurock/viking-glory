/**
 * An Ember route for the projects page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ProjectsIndexRoute = Ember.Route.extend({
  // Properties
  /**
   * The page title
   *
   * @memberof App.ProjectsIndexRoute
   * @instance
   * @type {string}
   */
  pageTitle: 'Projects',

  // Overrides
  /**
   * Specify the route's model
   *
   * @memberof App.ProjectsIndexRoute
   * @instance
   * @returns {Array.<PostItem>}
   */
  model: function() {

    return App.Posts.findAll('projects');
  },
  /**
   * Render the posts template
   *
   * @memberof App.ProjectsIndexRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('posts');
  }
});

/**
 * An Ember route for a given projects page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ProjectsPageRoute = Ember.Route.extend({
  /**
   * Specify the route's model
   *
   * @memberof App.ProjectsPageRoute
   * @instance
   * @param {Object} params
   */
  model: function(params) {

    return App.Posts.findAll('projects', params.page_id);
  },
  /**
   * Render the posts template
   *
   * @memberof App.ProjectsPageRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('posts');
  }
});

/**
 * An Ember route for a single project page
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ProjectsProjectRoute = Ember.Route.extend({
  /**
   * Render the post template
   *
   * @memberof App.ProjectsProjectRoute
   * @instance
   */
  renderTemplate: function() {

    this.render('post');
  }
});