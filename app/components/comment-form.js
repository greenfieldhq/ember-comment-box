import Ember from 'ember';

const {
  Component,
  setProperties
} = Ember;

export default Component.extend({
  init() {
    this._super(...arguments);

    this.author = '';
    this.text = '';
  },

  actions: {
    handleAuthorChange(e) {
      setProperties(this, { author: e.target.value });
    },

    handleTextChange(e) {
      setProperties(this, { text: e.target.value });
    }
  }
});
