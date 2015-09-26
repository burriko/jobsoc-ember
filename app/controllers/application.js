import Ember from 'ember';

export default Ember.Controller.extend({
    fullName: function() {
        return this.get('model.title') + ' ' + this.get('model.first_name') + ' ' + this.get('model.surname');
    }.property('model.title', 'model.firstName', 'model.surname')
});
