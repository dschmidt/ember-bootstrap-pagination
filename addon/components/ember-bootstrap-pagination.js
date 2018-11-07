import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import layout from '../templates/components/ember-bootstrap-pagination';

export default Component.extend({
  layout,
  disabled: 'disabled',
  checkEmptyValues: function(page) {
    return (isEmpty(page)) ? false : page;
  },
  previousPage: computed('pages', function() {
    return this.checkEmptyValues(this.get('pages.prev'));
  }),
  nextPage: computed('pages', function() {
    return this.checkEmptyValues(this.get('pages.next'));
  }),
  disablePrevButton: computed('pages', function() {
    if(this.get('pages.self') < 2) {
      return this.get('disabled');
    }
  }),
  disableNextButton: computed('pages', function() {
    if(this.get('pages.self') == this.get('pages.last')
      || (this.get('pages.last') == 0)) {
      return this.get('disabled');
    }
  }),
  actions: {
    updatePagination(requestedPage, currentPage) {
      this.get('paginate')(requestedPage, currentPage);
    }
  }
});