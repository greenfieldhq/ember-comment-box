import Ember from 'ember';

const {
  Component,
  get,
  inject,
  set
} = Ember;

const { service } = inject;

export default Component.extend({
  ajax: service(),

  init() {
    this._super(...arguments);

    this.data = [];

    this.loadCommentsFromServer();

    setInterval(
      this.loadCommentsFromServer.bind(this),
      get(this, 'pollInterval')
    );
  },

  loadCommentsFromServer() {
    get(this, 'ajax')
      .request(get(this, 'url'))
      .then((comments) => set(this, 'data', comments))
      .catch((error) => console.error(error));
  },

  actions: {
    handleCommentSubmit(comment) {
      let url = get(this, 'url');

      get(this, 'ajax')
        .post(url, { data: JSON.stringify(comment) })
        .then((comments) => set(this, 'data', comments))
        .catch((error) => console.error(error));
    }
  }
});
