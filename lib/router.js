Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'root',
  controller: 'MainPageController'
});

Router.route('/new', {
  name: 'newPost',
  controller : 'NewPostController'
});

Router.route('/posts/:_id', {
  name: 'singlePost',
  controller: 'SinglePostController'
});

Router.route('/contact', {
  name: 'contactPage',
  controller: 'ContactPageController'
});

Router.route("profile", {
  waitOn: function() {
    return [Meteor.subscribe('images')];
  }
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}, {only: 'newPost'});