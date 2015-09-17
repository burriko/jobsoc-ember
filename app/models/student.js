import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    first_name: DS.attr(),
    surname: DS.attr(),
    placements: DS.hasMany('placement'),
});
