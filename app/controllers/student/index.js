import Ember from 'ember';

export default Ember.Controller.extend({
    activePlacements: function() {
        return this.get('model.placements').filterBy('active');
    }.property('model.placements.@each.active'),

    completedPlacements: function() {
        return this.get('model.placements').filter(function(placement) {
            return placement.active != null;
        });
    }.property('model.placements.@each.active'),
});
