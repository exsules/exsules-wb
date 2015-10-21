import BasicRoute from 'exsules/routes/basic';

export default BasicRoute.extend({
  beforeModel() {
    this.transitionTo('profile.posts');
  }

});
