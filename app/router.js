import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('forgot_password');
  this.route('settings');
  this.route('profile', { path: '/:handle'} , function() {
    this.route('about');
    this.route('posts');
    this.route('photos');
    this.route('videos');
    this.route('friends');
    this.route('likes');
  });
});

export default Router;
