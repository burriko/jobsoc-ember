import Ember from 'ember';

export default Ember.Controller.extend({
    activePlacements: function() {
        var activePlacements = this.get('model.placements').filterBy('active');
        if (!Array.isArray(activePlacements)) {
            return activePlacements;
        }
        return activePlacements.sort(function(a, b) {
            return moment(b.get('placed')).diff(a.get('placed'));
        });
    }.property('model.placements.@each.active'),

    completedPlacements: function() {
        var completedPlacements = this.get('model.placements')
            .filter(function(placement) {
                return placement.active != null;
            });
        if (!Array.isArray(completedPlacements)) {
            return completedPlacements;
        }
        return completedPlacements.sort(function(a, b) {
            return moment(b.get('placed')).diff(a.get('placed'));
        });
    }.property('model.placements.@each.active'),
});
