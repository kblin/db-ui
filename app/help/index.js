import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import accordion from 'angular-ui-bootstrap/src/accordion';

import routes from './routes.js';

export default angular.module('antismash.db.ui.help', [uiRouter, angularAnimate, accordion])
  .config(routes).name;
