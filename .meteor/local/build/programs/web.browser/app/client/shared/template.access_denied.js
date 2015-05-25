(function(){
Template.__checkName("accessDenied");
Template["accessDenied"] = new Template("Template.accessDenied", (function() {
  var view = this;
  return HTML.Raw('<div class="jumbotron text-center">\n    <h2>You have to log in first</h2>\n  </div>');
}));

})();
