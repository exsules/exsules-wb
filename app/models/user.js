import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const { attr, belongsTo } = DS;

var Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' }),
  ],

  password: [
    validator('presence', true),
  ]
});

export default DS.Model.extend(Validations, {
  email: attr('string'),
  username: attr('string'),
  initial_setup: attr('boolean'),
  language: attr('string'),
  disable_mail: attr('boolean'),

  profile: belongsTo('profile')
});
