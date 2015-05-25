(function(){
Template.__checkName("postsList");
Template["postsList"] = new Template("Template.postsList", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n    ", HTML.HR(), "\n    ", Spacebars.include(view.lookupTemplate("postItem")), "\n    ", HTML.HR(), "\n  " ];
  });
}));

})();
