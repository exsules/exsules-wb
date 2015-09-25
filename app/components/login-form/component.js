import Ember from 'ember';

const { service } = Ember.inject;
const { on } = Ember;

export default Ember.Component.extend({
  session: service('session'),
  isWorking: false,

  parsley: on('didInsertElement', function() {
    this.$('form').parsley();
  }),

  actions: {
    authenticate() {
      this.set('isWorking', true);
      let data = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', data).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
