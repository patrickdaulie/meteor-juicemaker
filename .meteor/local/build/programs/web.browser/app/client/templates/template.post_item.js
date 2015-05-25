(function(){
Template.__checkName("postItem");
Template["postItem"] = new Template("Template.postItem", (function() {
  var view = this;
  return HTML.H3("\n    ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("singlePost")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return [ "\n      ", Blaze.View("lookup:title", function() {
        return Spacebars.mustache(view.lookup("title"));
      }), "\n    " ];
    });
  }), "\n  ");
}));

})();
