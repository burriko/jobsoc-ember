import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // return Ember.$.getJSON("/jobsoc-api/public/students/1");
        return this.store.findRecord('student', 1);
    }
});
