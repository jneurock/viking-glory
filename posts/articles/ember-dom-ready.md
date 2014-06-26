---
id: ember-dom-ready
title: Ember DOM Ready
category: articles
excerpt: Ember is awesome, in my biased opinion, but it presents interesting new challenges for developers. One of the most common patterns used in web development is to handle a DOM ready event but relying on that in a one-page application isn't possible.
created: 02/19/2014
updated: 02/21/2014
---

Ember is awesome, in my biased opinion, but it presents interesting new challenges for developers. One of the most common patterns used in web development is to handle a DOM ready event but relying on that in a one-page application isn't possible. With Ember, there is a simple way to handle a DOM ready like event when transitioning to a new route. 

Ember has a run loop which is used to batch and order (or reorder) work in a way that is most effective and efficient. The run loop has several queues, one if which is called “afterRender”.

<p class="no-margin">From the Ember documentation:</p>

<blockquote>
  The afterRender contains jobs meant to be run after all previously scheduled render tasks are complete. This is often good for 3rd-party DOM manipulation libraries, that should only be run after an entire tree of DOM has been updated. <cite>http://emberjs.com/guides/understanding-ember/run-loop/</cite>
</blockquote>

<p class="no-margin">Here's an example of how you would supply a callback to the “afterRender” queue of the run loop:</p>

<div class="row">
  <div class="columns code--container">
    <code>
      Ember.run.scheduleOnce('afterRender', this, function() {
      <br><br>
      &nbsp;&nbsp;<span class="comment">// Do stuff here on ready</span>
      <br>
      });
    </code>
  </div>
</div>

<p>
  <br>
  That's great but on its own it's not very helpful. It would be more helpful if a callback could be supplied whenever a transition has completed. The following example shows how Ember.Route can be extended so it always allows for a callback to be run when a transition has completed. Take note of the comment block above the code. It has some important information about how to use a route's “beforeModel” method after extending Ember.Route. Also notice the Ember.Route extension happens before the app is initialized.
</p>

<div class="row">
  <div class="columns code--container">
    <code>
      <span class="comment">
        /&#42;
        <br>
        &nbsp;&#42; Extend Ember.Route itself so the default "beforeModel" method
        <br>
        &nbsp;&#42; always checks for an “afterRender” method. Note: Any
        <br>
        &nbsp;&#42; need to actually use the "beforeModel" method of a route should
        <br>
        &nbsp;&#42; be carefully considered to avoid breaking this functionality.
        <br>
        &nbsp;&#42; If the "beforeModel" method of a route does need to be
        <br>
        &nbsp;&#42; implemented somewhere it should call this._super with the
        <br>
        &nbsp;&#42; current scope applied and the transition object passed in.
        <br>
        &nbsp;&#42;
        <br>
        &nbsp;&#42; For example:
        <br>
        &nbsp;&#42; &nbsp;&nbsp;beforeModel: function(transition) {
        <br>
        &nbsp;&#42;
        <br>
        &nbsp;&#42; &nbsp;&nbsp;&nbsp;&nbsp;// Do this first
        <br>
        &nbsp;&#42; &nbsp;&nbsp;&nbsp;&nbsp;this._super.call(this, transition);
        <br>
        &nbsp;&#42;
        <br>
        &nbsp;&#42; &nbsp;&nbsp;&nbsp;&nbsp;// Add what you need after this point...
        <br>
        &nbsp;&#42; &nbsp;&nbsp;}
        <br>
        &nbsp;&#42;/
      </span>
      <br>
      Ember.Route = Ember.Route.extend({
      <br>
      <span class="comment">
        &nbsp;&nbsp;/&#42;&#42;
        <br>
        &nbsp;&nbsp;&nbsp;&#42; Override Ember.Route's "beforeModel" method.
        <br>
        &nbsp;&nbsp;&nbsp;&#42; This will check the route object for an “afterRender”
        <br>
        &nbsp;&nbsp;&nbsp;&#42; method and run it when the transition completes.
        <br>
        &nbsp;&nbsp;&nbsp;&#42;
        <br>
        &nbsp;&nbsp;&nbsp;&#42; @memberof external:Ember.Route
        <br>
        &nbsp;&nbsp;&nbsp;&#42; @instance
        <br>
        &nbsp;&nbsp;&nbsp;&#42; @param {Object} transition The transition object
        <br>
        &nbsp;&nbsp;&nbsp;&#42;/
      </span>
      <br>
      &nbsp;&nbsp;beforeModel: function(transition) {
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;var self = this;
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">// Check if the route has an "afterRender" method of its own</span>
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;if (this.afterRender) {
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition.then(function() {
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ember.run.scheduleOnce('afterRender', self, self.afterRender);
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;}
      <br>
      &nbsp;&nbsp;}
      <br>
      }
      <br><br>
      var App = Ember.Application.create();
    </code>
  </div>
</div>

<p class="no-margin">
  <br>
  The next step would be to simply add an “afterRender” method to a route and it will be called when the transition is done.
</p>

<div class="row">
  <div class="columns code--container">
    <code>
      App.SomeRoute = Ember.Route.extend({
      <br>
      <span class="comment">
        &nbsp;&nbsp;/&#42;&#42;
        <br>
        &nbsp;&nbsp;&nbsp;&#42; This method is called when the transition to the route
        <br>
        &nbsp;&nbsp;&nbsp;&#42; is complete and after all the templates have been rendered.
        <br>
        &nbsp;&nbsp;&nbsp;&#42;
        <br>
        &nbsp;&nbsp;&nbsp;&#42; @memberof App.SomeRoute
        <br>
        &nbsp;&nbsp;&nbsp;&#42; @instance
        <br>
        &nbsp;&nbsp;&nbsp;&#42;/
      </span>
      <br>
      &nbsp;&nbsp;afterRender: function() {
      <br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">// Do something on ready</span>
      <br>
      &nbsp;&nbsp;}
      <br>
      });
    </code>
  </div>
</div>