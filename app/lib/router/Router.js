/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/studentsparents', {
  name: 'StudentsParents'
});

Router.route('/facultystaff', {
  name: 'FacultyStaff'
});

Router.route('/alumnifriends', {
  name: 'AlumniFriends'
});

Router.route('/contact', {
  name: 'Contact'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
