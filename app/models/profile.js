import Ember from 'ember';
import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  'first-name': attr('string'),
  'last-name': attr('string'),
  location: attr('string'),
  sex: attr('string'),
  birthday: attr('date'),
  handle: attr('string'),
  serachable: attr('string'), // Really needed?
  bio: attr('string'),

  user: belongsTo('user'),
  posts: hasMany('posts'),

  'full-name': computed('first-name', 'last-name', function() {
    return `${this.get('first-name')} ${this.get('last-name')}`;
  })
});
