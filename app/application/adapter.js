import Ember from 'ember';
import DS from 'ember-data';
import config from 'exsules/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.apiEndpoint,
  headers: {
    'accept': 'application/json; version=1',
  },
  authorizer: 'authorizer:application',

  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }

});
