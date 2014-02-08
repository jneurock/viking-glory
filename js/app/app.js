/**
 * Ember.js - A framework for creating <strong>ambitious</strong> web applications
 *
 * @external Ember
 * @see {@link http://emberjs.com/api/}
 */

/**
 * Ember's Application class
 *
 * @name external:Ember.Application
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Application.html}
 */

/**
 * Ember's Object class
 *
 * @name external:Ember.Object
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Object.html}
 */

/**
 * Ember's Route class
 *
 * @name external:Ember.Route
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Route.html}
 */

/**
 * Ember's Controller class
 *
 * @name external:Ember.Controller
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Controller.html}
 */

/*
 * Extend Ember's Route class. Add some default functionality to
 * the "beforeModel" hook.
 */
Ember.Route = Ember.Route.extend({
  /**
   * The route's "beforeModel" hook. Runs before the model is filled.
   * This hook still runs even if there is no model. The functionality
   * added here is basically like a DOM ready callback. To preserve
   * this functionality when implementing a before model hook, you
   * have to call this._super();.
   */
  beforeModel: function(transition) {

    var pageTitle = this.get('pageTitle') || '';

    transition.then(function() {

      Ember.run.scheduleOnce('afterRender', this, function() {

        App.setPageTitle(pageTitle);

        App.setTimeOfDay();

        // Initialize Foundation
        $(document).foundation();
      });
    });
  }
})

/**
 * The instance of Ember.Application used throughout the app
 *
 * @namespace
 * @name App
 * @extends external:Ember.Application
 */
App = Ember.Application.create({
  // Properties
  /**
   * An array of objects representing items I've been into lately
   *
   * @memberof App
   * @instance
   * @type {Array.<IntoLatelyItem>}
   */
  intoLatelyItems: [],
  /**
   * The site title
   *
   * @memberof App
   * @instance
   * @default
   * @type {string}
   */
  siteTitle: 'Viking Glory',
  /**
   * Time of day. Morning, afternoon or evening.
   *
   * @memberof App
   * @instance
   * @type {string}
   */
  timeOfDay: '',

  // Methods
  /**
   * Set the page title
   *
   * @memberof App
   * @instance
   * @param {string} title The page title
   */
  setPageTitle: function(title) {

    if (title) {

      document.title = title + ' | ' + App.get('siteTitle');
    }
  },
  /**
   * Set the time of day
   *
   * @memberof App
   * @instance
   * @param {?string} [defaultTime] Optional default time of day
   */
  setTimeOfDay: function(defaultTime) {

    var hour = new Date().getHours(),
        timeOfDay = defaultTime || 'day';

    // After 5 p.m.
    if (hour >= 17) {

      timeOfDay = 'evening';

    // Between 12 p.m. and 5 p.m.
    } else if (hour >= 12 && hour < 17) {

      timeOfDay = 'afternoon';

    } else {

      timeOfDay = 'morning';
    }

    this.set('timeOfDay', timeOfDay);
  }
});

/**
 * An Ember controller for the application itself
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Controller
 */
App.ApplicationController = Ember.Controller.extend({
  /**
   * Handles changes to the "currentPath" property
   *
   * @memberof App.ApplicationController
   * @event
   */
  currentPathChanged: function() {

    var currentPath = this.get('currentPath') || '';

    if (currentPath.indexOf('.') !== -1) {

      if (currentPath.indexOf('projects') !== -1) {

        App.Nav
          .set('isPathProjects', true)
          .set('isPathHome', false)
          .set('isPathGists', false);

      } else if (currentPath.indexOf('gists') !== -1) {

        App.Nav
          .set('isPathGists', true)
          .set('isPathHome', false)
          .set('isPathProjects', false);
      }

    } else if (currentPath.indexOf('index') !== -1) {

      App.Nav
        .set('isPathHome', true)
        .set('isPathGists', false)
        .set('isPathProjects', false);
    }

  }.observes('currentPath')
});