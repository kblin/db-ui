import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './routes.js';

export default angular.module('antismash.db.ui.start', [uiRouter])
  .config(routes).name;
