import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routes from './routes';
import StatsService from './service';
import StatsComponent from './component';
import template from './stats.html';

export default angular.module('antismash.db.ui.stats', [uiRouter])
  .config(routes)
  .component('asStats', { controller: StatsComponent, template })
  .service('StatsService', StatsService)
  .name;
