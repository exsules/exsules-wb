import Ember from 'ember';
import DS from 'ember-data';

const { service  } = Ember.inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  data: Ember.computed('session.data.authenticated.access_token', function() {
    const userId = this.get('session.data.authenticated.access_token');
    if (!Ember.isEmpty(userId)) {
      return DS.PromiseObject.create({
        promise: this.get('store').find('user', 'me')
      });
    }
  })
});