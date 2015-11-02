import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  email: attr('string'),
  username: attr('string'),
  initial_setup: attr('boolean'),
  language: attr('string'),
  disable_mail: attr('boolean'),

  profile: belongsTo('profile')
});
