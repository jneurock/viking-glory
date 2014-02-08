// This file is auto-generated and should be ignored from version control.
(function(){
  var template = Ember.Handlebars.template, templates = Ember.TEMPLATES = Ember.TEMPLATES || {};
  templates['_copyright'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<section class=\"copyright row\">\n  <div class=\"columns\">\n    <h4 class=\"subheader\">\n      <small>Copyright &copy; Viking Glory Productions | Built on <a href=\"https://github.com/jneurock/viking-base\">Viking Base</a></small>\n    </h4>\n  </div>\n</section>");
}
);
  templates['_footer'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<footer class=\"row main\">\n  <div class=\"large-8 columns\">\n    <p>\n      While I still take on small projects from time to time, I spend most of my time developing front-end code at my full-time job.\n      If you have an idea for a weekend project or need some part-time consulting work, feel free to contact me:\n      <a href=\"mailto:info@vikingglory.com\">info@vikingglory.com</a>\n    </p>\n  </div>\n\n  <div class=\"large-4 columns\">\n    <p>\n      Connect with me on LinkedIn: <br />\n      <a href=\"http://www.linkedin.com/in/jneurock\" class=\"li-connect-link\">Rocky Neurock</a>\n    </p>\n\n    <p>\n      You can also find me on GitHub: <br />\n      <a href=\"https://github.com/jneurock/\">jneurock (Rocky Neurock)</a>\n  </div>\n</footer>");
}
);
  templates['_header'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", hashTypes, hashContexts, escapeExpression = this.escapeExpression;
    data.buffer.push("<header class=\"row main\">\n  <div class=\"large-3 columns\">\n    <div class=\"profile-image\">\n      <img src=\"img/rocky.jpg\" alt=\"Picture of Rocky\" height=\"200\" width=\"200\" />\n    </div>\n  </div>\n\n  <div class=\"large-9 columns\">\n    <h3 class=\"white-shadow\">\n      Good ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "App.timeOfDay", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(", <br />\n      My name is Rocky. Viking Glory is the name of my company. This site is a\n      place for me to share ideas and articles related to software development.\n    </h3>\n  </div>\n</header>");
    return buffer;
}
);
  templates['_into-lately-item'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", hashContexts, hashTypes, escapeExpression = this.escapeExpression;
    data.buffer.push("<li class=\"into-lately__item\">\n  <a ");
    hashContexts = {"href":depth0, "title":depth0};
    hashTypes = {"href":"ID", "title":"ID"};
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {hash:{"href":("url"), "title":("title")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(">\n    <img ");
    hashContexts = {"src":depth0, "alt":depth0};
    hashTypes = {"src":"ID", "alt":"ID"};
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {hash:{"src":("image"), "alt":("title")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(" />\n  </a>\n</li>");
    return buffer;
}
);
  templates['_into-lately'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, hashTypes, hashContexts, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
    function program1(depth0, data) {
        var buffer = "", stack1, hashTypes, hashContexts, options;
        data.buffer.push("\n        ");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "into-lately-item", options) : helperMissing.call(depth0, "partial", "into-lately-item", options))));
        data.buffer.push("\n      ");
        return buffer;
    }
    data.buffer.push("<section class=\"row\">\n  <div class=\"columns\">\n    <h3 class=\"text-center\">What I've Been Into Lately</h3>\n\n    <ul class=\"large-block-grid-8 small-block-grid-4 into-lately\">\n      ");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers.each.call(depth0, "App.intoLatelyItems", {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n    </ul>\n  </div>\n</section>");
    return buffer;
}
);
  templates['_nav'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, stack2, hashContexts, hashTypes, options, escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    function program1(depth0, data) {
        data.buffer.push("Home");
    }
    function program3(depth0, data) {
        data.buffer.push("Projects");
    }
    function program5(depth0, data) {
        data.buffer.push("Gists");
    }
    data.buffer.push("<nav class=\"row\">\n  <div class=\"columns\">\n    <dl class=\"sub-nav\">\n      <dd ");
    hashContexts = {"class":depth0};
    hashTypes = {"class":"STRING"};
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {hash:{"class":("App.Nav.isPathHome:active")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(">\n        ");
    hashContexts = {"title":depth0};
    hashTypes = {"title":"STRING"};
    options = {hash:{"title":("Home")}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n      </dd>\n\n      <dd ");
    hashContexts = {"class":depth0};
    hashTypes = {"class":"STRING"};
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {hash:{"class":("App.Nav.isPathProjects:active")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(">\n        ");
    hashContexts = {"title":depth0};
    hashTypes = {"title":"STRING"};
    options = {hash:{"title":("Projects")}, inverse:self.noop, fn:self.program(3, program3, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "projects", options) : helperMissing.call(depth0, "link-to", "projects", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n      </dd>\n\n      <dd ");
    hashContexts = {"class":depth0};
    hashTypes = {"class":"STRING"};
    data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {hash:{"class":("App.Nav.isPathGists:active")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(">\n        ");
    hashContexts = {"title":depth0};
    hashTypes = {"title":"STRING"};
    options = {hash:{"title":("Gists")}, inverse:self.noop, fn:self.program(5, program5, data), contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "gists", options) : helperMissing.call(depth0, "link-to", "gists", options));
    if (stack2 || stack2 === 0) {
        data.buffer.push(stack2);
    }
    data.buffer.push("\n      </dd>\n    </dl>\n  </div>\n</nav>");
    return buffer;
}
);
  templates['_pagination'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
}
);
  templates['_post-item'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, hashTypes, hashContexts, escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    function program1(depth0, data) {
        var buffer = "", stack1, hashTypes, hashContexts;
        data.buffer.push("\n          ");
        hashTypes = {};
        hashContexts = {};
        stack1 = helpers.unless.call(depth0, "url", {hash:{}, inverse:self.program(5, program5, data), fn:self.program(2, program2, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
        if (stack1 || stack1 === 0) {
            data.buffer.push(stack1);
        }
        data.buffer.push("\n        ");
        return buffer;
    }
    function program2(depth0, data) {
        var buffer = "", stack1, stack2, hashTypes, hashContexts, options;
        data.buffer.push("\n            ");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, inverse:self.noop, fn:self.program(3, program3, data), contexts:[depth0, depth0], types:["STRING", "ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "post", "id", options) : helperMissing.call(depth0, "link-to", "post", "id", options));
        if (stack2 || stack2 === 0) {
            data.buffer.push(stack2);
        }
        data.buffer.push("\n          ");
        return buffer;
    }
    function program3(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n              ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n            ");
        return buffer;
    }
    function program5(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n            <a bind-attr href=url>\n              ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n            </a>\n          ");
        return buffer;
    }
    function program7(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n          ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n        ");
        return buffer;
    }
    function program9(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n            Updated ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "modified", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n            &nbsp;//&nbsp;\n          ");
        return buffer;
    }
    function program11(depth0, data) {
        var buffer = "", hashContexts, hashTypes;
        data.buffer.push("\n      <section class=\"row\">\n        <div class=\"columns\">\n          ");
        hashContexts = {"unescaped":depth0};
        hashTypes = {"unescaped":"STRING"};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "body", {hash:{"unescaped":("true")}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n        </div>\n      </section>\n    ");
        return buffer;
    }
    function program13(depth0, data) {
        var buffer = "", stack1, hashContexts, hashTypes;
        data.buffer.push("\n      <section class=\"row\">\n        <div class=\"columns\">\n          ");
        hashContexts = {"unescaped":depth0};
        hashTypes = {"unescaped":"STRING"};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "summary", {hash:{"unescaped":("true")}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n        </div>\n      </section>\n\n      <footer class=\"row\">\n        <div class=\"columns\">\n          ");
        hashTypes = {};
        hashContexts = {};
        stack1 = helpers.unless.call(depth0, "url", {hash:{}, inverse:self.program(17, program17, data), fn:self.program(14, program14, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
        if (stack1 || stack1 === 0) {
            data.buffer.push(stack1);
        }
        data.buffer.push("\n        </div>\n      </footer>\n    ");
        return buffer;
    }
    function program14(depth0, data) {
        var buffer = "", stack1, stack2, hashTypes, hashContexts, options;
        data.buffer.push("\n            ");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, inverse:self.noop, fn:self.program(15, program15, data), contexts:[depth0, depth0], types:["STRING", "ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        stack2 = ((stack1 = helpers["link-to"] || (depth0 && depth0["link-to"])), stack1 ? stack1.call(depth0, "post", "id", options) : helperMissing.call(depth0, "link-to", "post", "id", options));
        if (stack2 || stack2 === 0) {
            data.buffer.push(stack2);
        }
        data.buffer.push("\n          ");
        return buffer;
    }
    function program15(depth0, data) {
        data.buffer.push("\n              Read more...\n            ");
    }
    function program17(depth0, data) {
        var buffer = "", hashContexts, hashTypes;
        data.buffer.push("\n            <a ");
        hashContexts = {"href":depth0};
        hashTypes = {"href":"ID"};
        data.buffer.push(escapeExpression(helpers["bind-attr"].call(depth0, {hash:{"href":("url")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push(">Read more...</a>\n          ");
        return buffer;
    }
    data.buffer.push("<article class=\"row\">\n  <div class=\"columns\">\n    <header>\n      <h3>\n        ");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers.unless.call(depth0, "body", {hash:{}, inverse:self.program(7, program7, data), fn:self.program(1, program1, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n      </h3>\n\n      <h4 class=\"subheader\">\n        <small>\n          ");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["if"].call(depth0, "modified", {hash:{}, inverse:self.noop, fn:self.program(9, program9, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n\n          Posted ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "created", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("\n        </small>\n      </h4>\n    </header>\n\n    ");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["if"].call(depth0, "body", {hash:{}, inverse:self.program(13, program13, data), fn:self.program(11, program11, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n  </div>\n</article>");
    return buffer;
}
);
  templates['application'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, hashTypes, hashContexts, options, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "nav", options) : helperMissing.call(depth0, "partial", "nav", options))));
    data.buffer.push("\n\n");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "header", options) : helperMissing.call(depth0, "partial", "header", options))));
    data.buffer.push("\n\n<main class=\"row\">\n  <div class=\"columns\">\n    ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("\n  </div>\n</main>\n\n");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "into-lately", options) : helperMissing.call(depth0, "partial", "into-lately", options))));
    data.buffer.push("\n\n");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
    data.buffer.push("\n\n");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "copyright", options) : helperMissing.call(depth0, "partial", "copyright", options))));
    return buffer;
}
);
  templates['gists'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<p>\n  Nothing here, yet. Soon... very soon.\n</p>");
}
);
  templates['index'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<p>\n  This site is nearly done going through an overhaul. Some good content coming soon... very soon.\n</p>\n\n<p>\n  - Rocky <br />\n  1/18/2014\n</p>");
}
);
  templates['post'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var stack1, hashTypes, hashContexts, options, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression;
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "post-item", options) : helperMissing.call(depth0, "partial", "post-item", options))));
}
);
  templates['posts'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", stack1, hashTypes, hashContexts, options, helperMissing = helpers.helperMissing, escapeExpression = this.escapeExpression, self = this;
    function program1(depth0, data) {
        var buffer = "", stack1, hashTypes, hashContexts, options;
        data.buffer.push("\n  ");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "post-item", options) : helperMissing.call(depth0, "partial", "post-item", options))));
        data.buffer.push("\n");
        return buffer;
    }
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers.each.call(depth0, {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n\n");
    hashTypes = {};
    hashContexts = {};
    options = {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.partial || (depth0 && depth0.partial)), stack1 ? stack1.call(depth0, "pagination", options) : helperMissing.call(depth0, "partial", "pagination", options))));
    return buffer;
}
);
  templates['projects'] = template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    data.buffer.push("<p>\n  Nothing here, yet. Soon... very soon.\n</p>");
}
);
}());