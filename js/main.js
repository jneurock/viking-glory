// Initialize Foundation
$(document).foundation();

// Global AJAX settings
$.ajaxSetup({
  beforeSend: function() {

    // Begin timeout
    App.set('timeout', setTimeout(function() {

      App.set('isLoading', true);

    }, 300));
  },
  complete: function() {

    var timeout = App.get('timeout');

    if (timeout) {

      clearTimeout(timeout);

      App.set('timeout', null);
    }

    App.set('isLoading', false);
  },
  contentType: 'json'
});