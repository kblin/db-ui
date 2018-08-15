import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'font-awesome/css/font-awesome.min.css';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';
import './css/style.less';

import routes from './routes';
import start from './start';
import about from './about';
import browse from './browse';
import stats from './stats';
import show from './show';
import help from './help';
import query from './query';

angular.module('antismash.db.ui', [uiRouter, start, about, browse, stats, show, help, query])
  .config(routes);
