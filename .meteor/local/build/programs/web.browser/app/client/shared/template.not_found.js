(function(){
Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Page not found</h1>\n  "), HTML.P("Go back to our ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("root")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "main page";
    });
  })) ];
}));

})();
