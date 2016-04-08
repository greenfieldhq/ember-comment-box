import Ember from 'ember';

const {
  Component,
  get,
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
    },

    handleSubmit(e) {
      e.preventDefault();

      let author = get(this, 'author').trim();
      let text = get(this, 'text').trim();

      if (!author || !text) {
        return;
      }

      // TODO: Send request to the server
      setProperties(this, { author: '', text: '' });
    }
  }
});
