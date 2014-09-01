---
id: ember-dom-ready
title: Ember DOM Ready
category: articles
tags: ember
excerpt: Ember is awesome, in my biased opinion, but it presents interesting new challenges for developers. One of the most common patterns used in web development is to handle a DOM ready event but relying on that in a one-page application isn't possible.
created: 02/19/2014
updated: 02/21/2014
---

Ember is awesome, in my biased opinion, but it presents interesting new challenges for developers. One of the most common patterns used in web development is to handle a DOM ready event but relying on that in a one-page application isn't possible. With Ember, there is a simple way to handle a DOM ready like event when transitioning to a new route. 

Ember has a run loop which is used to batch and order (or reorder) work in a way that is most effective and efficient. The run loop has several queues, one if which is called “afterRender”.

From the Ember documentation:

<blockquote>
  The afterRender contains jobs meant to be run after all previously scheduled render tasks are complete. This is often good for 3rd-party DOM manipulation libraries, that should only be run after an entire tree of DOM has been updated. <cite>http://emberjs.com/guides/understanding-ember/run-loop/</cite>
</blockquote>

Here's an example of how you would supply a callback to the “afterRender” queue of the run loop:

```javascript
Ember.run.scheduleOnce('afterRender', this, function() {

  // Do stuff here on ready
});  
```

That's great but on its own it's not very helpful. It would be more helpful if a callback could be supplied whenever a transition has completed. The following example shows how Ember.Route can be extended so it always allows for a callback to be run when a transition has completed. Take note of the comment block above the code. It has some important information about how to use a route's “beforeModel” method after extending Ember.Route. Also notice the Ember.Route extension happens before the app is initialized.

```javascript
/*
 * Extend Ember.Route itself so the default "beforeModel" method
 * always checks for an “afterRender” method. Note: Any
 * need to actually use the "beforeModel" method of a route should
 * be carefully considered to avoid breaking this functionality.
 * If the "beforeModel" method of a route does need to be
 * implemented somewhere it should call this._super with the
 * current scope applied and the transition object passed in.
 *
 * For example:
 *   beforeModel: function(transition) {
 *
 *     // Do this first
 *     this._super.call(this, transition);
 *
 *     // Add what you need after this point...
 *   }
 */
Ember.Route = Ember.Route.extend({
  /**
   * Override Ember.Route's "beforeModel" method.
   * This will check the route object for an “afterRender”
   * method and run it when the transition completes.
   *
   * @memberof external:Ember.Route
   * @instance
   * @param {Object} transition The transition object
   */
  beforeModel: function(transition) {

    var self = this;

    // Check if the route has an "afterRender" method of its own
    if (this.afterRender) {

      transition.then(function() {

        Ember.run.scheduleOnce('afterRender', self, self.afterRender);
      });
    }
  }
}

var App = Ember.Application.create(); 
```

The next step would be to simply add an “afterRender” method to a route and it will be called when the transition is done.

```javascript
App.SomeRoute = Ember.Route.extend({
  /**
   * This method is called when the transition to the route
   * is complete and after all the templates have been rendered.
   *
   * @memberof App.SomeRoute
   * @instance
   */
  afterRender: function() {

    // Do something on ready
  }
});
```