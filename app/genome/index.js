import angular from 'angular';

import GenomeComponent from './component.js';
import GenomeService from './service.js';
import template from './genome.html';

export default angular.module('antismash.db.ui.genome', [])
  .component('asGenome', {
    bindings: { genomeId: '<' },
    controller: GenomeComponent,
    template
  })
  .service('GenomeService', GenomeService)
  .name;

