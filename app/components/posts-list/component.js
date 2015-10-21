import Ember from 'ember';

export default Ember.Component.extend({
  sortedPostsProps: ['createdAt:desc'],
  sortedPosts: Ember.computed.sort('post', 'sortedPostsProps')
});
