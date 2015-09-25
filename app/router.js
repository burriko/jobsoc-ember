import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('student', { path: '/' }, function() {});
  this.route('placements', { path: '/placements/:placement_id' });
});

export default Router;
