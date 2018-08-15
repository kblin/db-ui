import angular from 'angular';
import uiRouter from 'angular-ui-router';
import genome from '../genome';

import routes from './routes.js';

export default angular.module('antismash.db.ui.show', [uiRouter, genome])
  .config(routes)
  .name;
