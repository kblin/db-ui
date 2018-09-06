import angular from 'angular';
import tabs from 'angular-ui-bootstrap/src/tabs';
import buttons from 'angular-ui-bootstrap/src/buttons';
import uiRouter from 'angular-ui-router';

import queryterm from './term';

import routes from './routes.js';
import QueryComponent from './component.js';
import template from './template.html';

export default angular.module('antismash.db.ui.query', [uiRouter, tabs, buttons, queryterm])
  .component('asQuery', {
    bindings: { search_string: '<' },
    controller: QueryComponent,
    template,
  })
  .config(routes)
  .name;
