import DS from 'ember-data';
import config from 'exsules/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiEndpoint,
  headers: {
    'accept': 'application/json; version=1'
  }

});
