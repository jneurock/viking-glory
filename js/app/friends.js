/**
 * An Ember route for the friends page
 *
 * @memberof App
 * @constructor
 * @exends external:Ember.Route
 */
App.FriendsRoute = Ember.Route.extend({
  // Properties
  /**
   * The page title
   *
   * @memberof App.FriendsRoute
   * @instance
   * @type {string}
   */
  pageTitle: 'Friends',

  // Overrides
  /**
   * The route's model hook will simply return an array
   *
   * @memberof App.FriendsRoute
   * @instance
   * @returns {Array.<Object>}
   */
  model: function() {

    return App.Friends;
  }
});

/**
 * An array of friend groups containing friend objects
 *
 * @memberof App
 * @instance
 * @type {Array.<Object>}
 */
App.Friends = [
  {
    name: 'Developers',
    description: 'People that code. These are people that do what I do and then some! If I\'m not available for a project, try one of these fine folks or just take a look at the awesome work they do.',
    icon: 'code',
    friends: [
      {
        name: 'Evan Rowe',
        url: 'http://evan-rowe.com/'
      },
      {
        name: 'Scott Vandehey',
        url: 'http://spaceninja.com/'
      },
      {
        name: 'Patrick Walsh',
        url: 'http://departmentofdigitalwizardry.com/'
      },
      {
        name: 'Zak MacDonald',
        url: 'http://zakmac.com/'
      },
      {
        name: 'Sonali Agrawal',
        url: 'http://sonaliagrawal.com/'
      },
      {
        name: 'Micah Godbolt',
        url: 'http://godbolt.me/'
      },
      {
        name: 'Rico Jones',
        url: 'http://toasterlovin.com/'
      },
      {
        name: 'Tom Dale',
        url: 'http://tomdale.net/'
      },
      {
        name: 'Yehuda Katz',
        url: 'http://yehudakatz.com/'
      },
      {
        name: 'Justin Vincent',
        url: 'http://justinvincent.com/'
      }
    ]
  },
  {
    name: 'Designers',
    description: 'I was always into art class at school. I love to be creative, I\'m just not good at art and design. These people are. They might not know it but I\'m always trying to steal nuggets of wisdom from them when they aren\'t looking.',
    icon: 'screen',
    friends: [
      {
        name: 'Michael Garvey',
        url: 'http://michaeljgarvey.com/'
      },
      {
        name: 'Allan White',
        url: 'http://allanwhite.info/'
      },
      {
        name: 'Matthew Hamm',
        url: 'http://matthewhamm.com/'
      },
      {
        name: 'Ryan Luton',
        url: 'http://ryanluton.com/'
      }
    ]
  },
  {
    name: 'UX Experts',
    description: 'I\'m constantly amazed at the amount of work I produce that isn\'t as user-friendly as I thought. Great UX is important to me and I\'ve been very lucky to know some true experts. They just need to have more websites.',
    icon: 'mug',
    friends: [
      {
        name: 'Rian van der Merwe',
        url: 'http://elezea.com/'
      }
    ]
  }
];