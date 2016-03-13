import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  data: [
    { id: 1, author: 'Yehuda Katz', text: 'This is one comment' },
    { id: 2, author: 'Tom Dale', text: 'This is *another* comment' }
  ]
});
