import { QueryTerm } from './term/component.js';

export class Query {
  constructor(terms, search, return_type) {
    this.search = search ? search : 'cluster';
    this.return_type = return_type ? return_type : 'json';
    this.terms = terms;
  }

  isValid() {
    if (!this.terms) {
      return false;
    }
    return this.terms.isValid();
  }
}


export default class QueryController {
  constructor($http, $window, $stateParams) {
    this.$http = $http;
    this.$window = $window;
    this.$stateParams = $stateParams;

    this.search_string = '';

    this.query = new Query(new QueryTerm());
  }

  $onInit() {
    if (this.$stateParams.search_string) {
      this.search_string = this.$stateParams.search_string;
    }
  }

  isValidSearch() {
    if (!this.query) {
      return false;
    }
    return this.query.isValid();
  }

  isValidTerm(term) {
    if (term.type == 'expr') {
      if (term.category === '') {
        return false;
      }
      if (term.term === '') {
        return false;
      }
      return true;
    }
  }

  showSearch() {
    if (!this.query) {
      return true;
    }
    if (this.graphicalPossible()) {
      return true;
    }
    return false;
  }

  graphicalPossible() {
    return this.query.return_type == 'json';
  }

};
