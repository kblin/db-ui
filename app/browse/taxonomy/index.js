import angular from 'angular';
import jstree_directive from '../jstree';

import TaxonomyComponent from './component.js';
import template from './template.html';

export default angular.module('antismash.db.ui.browse.taxonomy', [jstree_directive])
  .component('browseTaxonomy', {
    controller: TaxonomyComponent,
    template
  })
  .name;
