/**
 * An object representing some technology I've been into lately
 *
 * @constructor
 * @author Rocky Neurock <info@vikingglory.com>
 * @param {Object} options Constructor options
 */
function IntoLatelyItem(options) {

  // Private
  var optionImage = (options && options.image) ? options.image : '',
      optionTitle = (options && options.title) ? options.title : '',
      optionUrl = (options && options.url) ? options.url : '';

  // Public
  return {
    /**
     * The image source
     *
     * @memberof IntoLatelyItem
     * @instance
     * @type {string}
     */
    image: optionImage,
    /**
     * The link title
     *
     * @memberof IntoLatelyItem
     * @instance
     * @type {string}
     */
    title: optionTitle,
    /**
     * The URL of the technology's website
     *
     * @memberof IntoLatelyItem
     * @instance
     * @type {string}
     */
    url: optionUrl
  };
}

// Create into lately objects and store in array on App object
App.set('intoLatelyItems', [
  // Ember.js
  new IntoLatelyItem({
    image: 'img/ember.png',
    title: 'Ember.js',
    url: 'http://emberjs.com/'
  }),
  // Handlebars.js
  new IntoLatelyItem({
    image: 'img/handlebars.png',
    title: 'handlebars.js',
    url: 'http://handlebarsjs.com/'
  }),
  // Foundation
  new IntoLatelyItem({
    image: 'img/foundation.png',
    title: 'Foundation',
    url: 'http://foundation.zurb.com/'
  }),
  // Sass
  new IntoLatelyItem({
    image: 'img/sass.png',
    title: 'Sass',
    url: 'http://sass-lang.com/'
  }),
  // Node.js
  new IntoLatelyItem({
    image: 'img/node.png',
    title: 'Node.js',
    url: 'http://nodejs.org/'
  }),
  // Bower
  new IntoLatelyItem({
    image: 'img/bower.png',
    title: 'Bower',
    url: 'http://bower.io/'
  }),
  // GitHub
  new IntoLatelyItem({
    image: 'img/github.png',
    title: 'GitHub',
    url: 'https://github.com/'
  }),
  // WordPress
  new IntoLatelyItem({
    image: 'img/wordpress.png',
    title: 'WordPress',
    url: 'http://wordpress.org/'
  })
]);