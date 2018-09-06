import angular from 'angular';

import QueryTermController from './component.js';
import CategoryService from './service.js';
import template from './template.html';

export default angular.module('antismash.db.ui.query.term', [])
  .component('asQueryTerm', {
    controller: QueryTermController,
    bindings: { term: '<'},
    template
  })
  .service('CategoryService', CategoryService)
  .name;

