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

/**
 * Ember's Array Controller class
 *
 * @name external:Ember.ArrayController
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.ArrayController.html}
 */

/**
 * Ember's Component class
 *
 * @name external:Ember.Component
 * @class
 * @see {@link http://emberjs.com/api/classes/Ember.Component.html}
 */

// Tell Ember not to log its version
if (window.Ember) {

  Ember.LOG_VERSION = false;

} else if (DEBUG) {

  console.error('Ember was not found');
}

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

        // Scroll to top
        $('html, body').animate({
          scrollTop: 0
        });

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
   * Whether or not the application is loading
   *
   * @memberof App
   * @instance
   * @type {boolean}
   */
  isLoading: false,
  /**
   * The number of posts per page to render
   *
   * @memberof App
   * @instance
   * @default
   * @type {number}
   */
  postsPerPage: 5,
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
  /**
   * A timeout function for AJAX calls
   *
   * @memberof App
   * @instance
   * @type {function}
   */
  timeout: null,

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
  },
  /**
   * Call this method when a transition passed to loading action handlers completes.
   * Stops the loading timeout and set the loading status of the app to false.
   *
   * @memberof App
   * @instance
   */
  transitionComplete: function() {

    var timeout = App.get('timeout');

    if (timeout) {

      clearTimeout(timeout);

      App.set('timeout', null);
    }

    App.set('isLoading', false);
  }
});

/**
 * An Ember route for the entire application
 *
 * @memberof App
 * @constructor
 * @extends external:Ember.Route
 */
App.ApplicationRoute = Ember.Route.extend({
  actions: {
    /**
     * Handles all model loading events
     *
     * @memberof App.ApplicationRoute
     * @instance
     * @param {Object} transition The transition object
     */
    loading: function(transition) {

      // Begin timeout
      App.set('timeout', setTimeout(function() {

        App.set('isLoading', true);

      }, 300));

      // Pass transition complete method as success and fail callbacks
      transition.then(App.transitionComplete, App.transitionComplete);
    }
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
   * Provide a reference to the instance of
   * App.ApplicationController to the App object
   *
   * @memberof App.ApplicationController
   * @event
   */
  init: function() {

    this._super();

    App.set('applicationController', this);
  }
});