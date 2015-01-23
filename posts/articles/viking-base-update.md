---
id: viking-base-update
title: Viking Base Update
category: articles
tags: node.js, gulp, bower, ember, foundation
excerpt: It's been a while since I've had a chance to post any updates. Full-time work has kept me plenty busy lately. The [Viking Base](http://github.com/jneurock/viking-base) project hasn't seen many updates in a while but there is a reason.
created: 01/22/2015
---

It's been a while since I've had a chance to post any updates. Full-time work has kept me plenty busy lately. The [Viking Base](http://github.com/jneurock/viking-base) project hasn't seen many updates in a while but there is a reason.

Viking Base is basically the open-source version of the platform we use to build front-end applications at [HealthSparq](http://healthsparq.com/), where I work full-time. HealthSparq applications use a healthy dose of HTML5 tags and Viking Base includes lots of goodies to make sure they work with IE 8 (our largest browser share, \*sigh\*). [Ember](http://emberjs.com/) 1.8 introduced something behind the scenes they call ["Metal-Views"](http://emberjs.com/blog/2014/10/26/ember-1-8-0-released.html) which currently break HTML5 tags in IE 8, even with a shim.

Metal-Views are a massive improvement to Ember's rendering layer; however, a strange bug that breaks HTML5 tags in IE 8 was introduced. See [this bug](https://github.com/emberjs/ember.js/issues/9495) for more details; though, it looks like the bug will be fixed in 1.10.

Since IE 8 support, including HTML5 tags, is crucial to HealthSparq applications, I haven't updated Viking Base's Ember dependency, yet. When Ember 1.10 is released, I'll update Ember and Handlebars to the latest stable versions and get the project back on track.

Other Viking Base plans include improving the API and adding documentation. The emergence of Ember-CLI could mean there is no need for Viking Base someday (soon, even) so I'll be keeping an eye on progress there and we'll be experimenting with it at HealthSparq in the coming months.