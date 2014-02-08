/**
 * An Ember object
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Object
 */
App.Nav = Ember.Object.create();

App.Nav.reopen({
  // Properties
  /**
   * Whether or not the current path is "Gists"
   *
   * @memberof App.Nav
   * @instance
   * @default
   * @type {boolean}
   */
  isPathGists: false,
  /**
   * Whether or not the current path is "Home"
   *
   * @memberof App.Nav
   * @instance
   * @default
   * @type {boolean}
   */
  isPathHome: true,
  /**
   * Whether or not the current path is "Projects"
   *
   * @memberof App.Nav
   * @instance
   * @default
   * @type {boolean}
   */
  isPathProjects: false
});