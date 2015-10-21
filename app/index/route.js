import BasicRoute from 'exsules/routes/basic';

export default BasicRoute.extend({
  model() {
    return this.store.findAll('profile');
  }
});
