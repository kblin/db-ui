import angular from 'angular';
import jstree_directive from '../jstree';

import SecmetComponent from './component.js';
import template from './template.html';

export default angular.module('antismash.db.ui.browse.secmet', [jstree_directive])
  .component('browseSecmet', {
    controller: SecmetComponent,
    template
  })
  .name;
