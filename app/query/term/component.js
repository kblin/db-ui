export class QueryTerm {
  constructor(term_type, ...args) {
    this.term_type = term_type ? term_type : 'expr';
    if (term_type == 'op') {
      let [operation, left, right] = args;
      this.operation = operation;
      this.left = left;
      this.right = right;
    } else {
      let [category, term] = args;
      this.category = category ? category : '';
      this.term = term ? term : '';
    }
  }

  swap() {
    [this.left, this.right] = [this.right, this.left];
  }

  isValid() {
    if (this.term_type == 'expr') {
      if (this.category === '') {
        return false;
      }
      if (this.term === '') {
        return false;
      }
      return true;
    }
    if (this.term_type == 'op') {
      return this.left.isValid() && this.right.isValid();
    }
    return false;
  }
}

export default class QueryTermController {
  constructor(CategoryService) {
    this.CategoryService = CategoryService;
    if (! this.term ) {
      this.term = new QueryTerm();
    }
  }

  add() {
    var new_term = new QueryTerm('op', 'and', this.term, new QueryTerm());
    this.term = new_term;
  }

  remove(term) {
    if (this.term.right == term) {
      this.term = this.term.left;
      return;
    }
    if (this.term.left == term) {
      this.term = this.term.right;
    }
  }

}
