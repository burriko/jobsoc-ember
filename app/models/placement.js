import DS from 'ember-data';

export default DS.Model.extend({
    placed: DS.attr(),
    active: DS.attr(),
    student: DS.belongsTo('student'),
    assignment: DS.belongsTo('assignment'),
    shifts: DS.hasMany('shift'),
});
