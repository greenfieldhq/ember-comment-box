import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  init() {
    this._super(...arguments);

    this.data = [];
  }
});
