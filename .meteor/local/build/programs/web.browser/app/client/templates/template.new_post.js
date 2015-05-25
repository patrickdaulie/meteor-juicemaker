(function(){
Template.__checkName("newPost");
Template["newPost"] = new Template("Template.newPost", (function() {
  var view = this;
  return [ HTML.Raw("<h1>Form for new Post</h1>\n  "), Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Posts"),
      id: Spacebars.call("submitPostForm"),
      type: Spacebars.call("method"),
      meteormethod: Spacebars.call("submitPost")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("quickForm"));
  }) ];
}));

})();
