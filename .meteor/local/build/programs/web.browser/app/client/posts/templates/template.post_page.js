(function(){
Template.__checkName("postPage");
Template["postPage"] = new Template("Template.postPage", (function() {
  var view = this;
  return [ HTML.H2(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n  ", HTML.P(Blaze.View("lookup:body", function() {
    return Spacebars.mustache(view.lookup("body"));
  })), "\n  ", HTML.P("by ", Blaze.View("lookup:author", function() {
    return Spacebars.mustache(view.lookup("author"));
  })) ];
}));

})();
