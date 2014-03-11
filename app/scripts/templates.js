Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class='container'>\n  <h1>Elizabeth's Brewster's Millions Ember App</h1>\n  <p class='lead'>Selling intangible items for when you have to spend $30 million in 30 days, as part of the stipulations of a dead Great Uncle's will.</p>\n  <hr>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  \n  <div class='text-muted'><small>Foot</small></div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>No, still main page. no products. Also, let's figure out how to put product on the main page.</h3>");
  
});

Ember.TEMPLATES["products"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h3>Intangible Products for Sale</h3>\n<div class='row'>\n  <div class='col-lg-2'>\n    <h4>All Products</h4>\n    <ul>\n      <li>Products go here</li>\n    </ul>\n  </div>\n  <div class='col-lg-10'>\n    Product View Goes Here\n  </div>\n</div>");
  
});