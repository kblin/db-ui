import angular from 'angular';
import tabs from 'angular-ui-bootstrap/src/tabs';
import uiRouter from 'angular-ui-router';

import routes from './routes.js';
import taxonomy from './taxonomy';
import secmet from './secmet';

export default angular.module('antismash.db.ui.browse', [uiRouter, tabs, taxonomy, secmet])
  .config(routes)
  .name;
