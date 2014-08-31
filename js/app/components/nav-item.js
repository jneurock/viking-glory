// For a list of nav items see route-map.js

/**
 * An Ember component for nav menu items
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Component
 */
App.NavItemComponent = Ember.Component.extend({
  /**
   * Class name bindings for this component
   *
   * @memberof App.NavItemComponent
   * @instance
   * @type {Array.<string>}
   */
  classNameBindings: [
    'isActive:active'
  ],
  /**
   * Computed property that indicates whether or not
   * the path for this nav item is active
   *
   * @memberof App.NavItemComponent
   * @instance
   * @returns {boolean}
   */
  isActive: function() {

    var currentPath = App.get('applicationController.currentPath'),
        path = this.get('path');

    if (path === 'index') {

      return currentPath === path;

    } else if (currentPath.indexOf(path) !== -1) {

      return true;
    }

    return false;

  }.property('App.applicationController.currentPath'),

  /**
   * The path this nav item component is associated with
   *
   * @memberof App.NavItemComponent
   * @instance
   * @type {string}
   */
  path: '',
  /**
   * The tag name of the element that wraps the component
   *
   * @memberof App.NavItemComponent
   * @instance
   * @type {string}
   */
  tagName: 'dd',
  /**
   * The title of the nav item
   *
   * @memberof App.NavItemComponent
   * @instance
   * @type {string}
   */
  title: '',
  /**
   * The URL of the nav item
   *
   * @memberof App.NavItemComponent
   * @instance
   * @type {string}
   */
  url: ''
});