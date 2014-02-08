App.Router.map(function() {
  
  this.resource('gists', function() {

    this.route('page', {
      path: '/page/:page_id'
    });
  });

  this.route('post', {
    path: '/post/:post_id'
  });

  this.route('posts');

  this.resource('projects', function() {

    this.route('page', {
      path: '/page/:page_id'
    });

    this.route('project', {
      path: '/project/:post_id'
    });
  });
});