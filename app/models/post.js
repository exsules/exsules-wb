import DS from 'ember-data';

const { attr, belongsTo, } = DS;

export default DS.Model.extend({
  author: attr('string'),
  text: attr('string'),
  handle: attr('string'),
  comments_count: attr('number'),
  likes_count: attr('number'),
  created_at: attr('date'),
  open_graph_cache: attr(),

  profile: belongsTo('profile')
});
