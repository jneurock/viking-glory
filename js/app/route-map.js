// Define the routes for the application
App.Router.map(function() {
  
  this.resource('articles', function() {

    this.route('article', {
      path: '/:post_id'
    });

    this.route('page', {
      path: '/page/:page_id'
    });
  });

  this.route('friends');

  this.route('post', {
    path: '/post/:post_id'
  });

  this.route('posts');

  this.resource('projects', function() {

    this.route('page', {
      path: '/page/:page_id'
    });

    this.route('project', {
      path: '/:post_id'
    });
  });
});

/**
 * A list of nav items
 *
 * @memberof App
 * @instance
 * @type {Array.<Object>}
 */
App.NavItems = [
  {
    path: 'index',
    title: 'Home',
    url: '#/'
  },
  {
    path: 'articles',
    title: 'Articles',
    url: '#/articles'
  },
  {
    path: 'projects',
    title: 'Projects',
    url: '#/projects'
  },
  {
    path: 'friends',
    title: 'Friends',
    url: '#/friends'
  }
];