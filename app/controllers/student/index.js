import Ember from 'ember';

export default Ember.Controller.extend({
    fullName: function() {
        return this.get('model.title') + ' ' + this.get('model.first_name') + ' ' + this.get('model.surname');
    }.property('model.title', 'model.firstName', 'model.surname'),

    activePlacements: function() {
        return this.get('model.placements').filterBy('active');
    }.property('model.placements.@each.active'),

    completedPlacements: function() {
        return this.get('model.placements').filter(function(placement) {
            return placement.active != null;
        });
    }.property('model.placements.@each.active'),
});
