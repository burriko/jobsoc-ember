import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    // host: 'http://careers.dev',
    namespace: 'jobsoc-api/public'
});
