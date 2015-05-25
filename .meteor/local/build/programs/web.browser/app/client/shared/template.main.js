(function(){
Template.__checkName("mainLayout");
Template["mainLayout"] = new Template("Template.mainLayout", (function() {
  var view = this;
  return [ HTML.NAV({
    "class": "navbar navbar-default"
  }, "\n    ", HTML.DIV({
    "class": "container"
  }, "\n      ", HTML.DIV({
    "class": "navbar-header"
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("root"),
      "class": Spacebars.call("navbar-brand")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n          Tutorial blog\n        ";
    });
  }), "\n      "), "\n      ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n        ", HTML.LI("\n          ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("root")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n            Home\n          ";
    });
  }), "\n        "), "\n        ", HTML.LI("\n          ", Blaze._TemplateWith(function() {
    return {
      route: Spacebars.call("newPost")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("linkTo"), function() {
      return "\n            Add new post\n          ";
    });
  }), "\n        "), "\n      "), "\n      ", HTML.UL({
    "class": "nav navbar-nav navbar-right"
  }, "\n       ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({
    "class": "container"
  }, "\n    ", HTML.DIV({
    "class": "row"
  }, "\n      ", HTML.Raw('<div class="col-lg-2"></div>'), "\n      ", HTML.DIV({
    "class": "col-lg-8"
  }, "\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n      "), "\n      ", HTML.Raw('<div class="col-lg-2"></div>'), "\n    "), "\n  ") ];
}));

})();
