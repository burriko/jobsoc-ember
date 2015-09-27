import DS from 'ember-data';

export default DS.Model.extend({
    date_worked: DS.attr(),
    hours: DS.attr(),
    minutes: DS.attr(),
    pay: DS.attr(),
    placement: DS.belongsTo('placement'),
});
