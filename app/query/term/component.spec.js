import { QueryTerm } from './component.js';
import QueryTermController from './component.js';

describe("QueryTerm", () => {
  it("should instantiate correctly as an expression", () => {
    let qt = new QueryTerm('expr', 'category', 'term');
    expect(qt.term_type).toEqual('expr');
    expect(qt.category).toEqual('category');
    expect(qt.term).toEqual('term');
  });

  it("should instantiate correctly as an operation", () => {
    let left = new QueryTerm('expr', 'left_cat', 'left_term');
    let right = new QueryTerm('expr', 'right_cat', 'right_term');
    let qt = new QueryTerm('op', 'and', left, right);
    expect(qt.term_type).toEqual('op');
    expect(qt.operation).toEqual('and');
    expect(qt.left).toEqual(left);
    expect(qt.right).toEqual(right);
  });

  describe("swap", () => {
    it("should swap left and right terms", () => {
      let left = new QueryTerm('expr', 'left_cat', 'left_term');
      let right = new QueryTerm('expr', 'right_cat', 'right_term');
      let qt = new QueryTerm('op', 'and', left, right);
      qt.swap();
      expect(qt.left).toEqual(right);
      expect(qt.right).toEqual(left);
    });
  });
});

describe("QueryTermController", () => {
  let qc, left, right;
  beforeEach(() => {
    qc = new QueryTermController();
    qc.term.term_type = 'expr';
    qc.term.category = 'category';
    qc.term.term = 'term';
    left = new QueryTerm('expr', 'left_cat', 'left_term');
    right = new QueryTerm('expr', 'right_cat', 'right_term');
  });

  describe("add", () => {
    it("should change the term from expr to op", () => {
      qc.add();
      expect(qc.term.term_type).toEqual('op');
      expect(qc.term.operation).toEqual('and');
      expect(qc.term.left.term_type).toEqual('expr');
      expect(qc.term.left.category).toEqual('category');
      expect(qc.term.left.term).toEqual('term');
      expect(qc.term.right.term_type).toEqual('expr');
      expect(qc.term.right.category).toEqual('');
      expect(qc.term.right.term).toEqual('');
    });
  });

  describe("remove", () => {
    it("should replace itself with the right term when deleting left", () => {
      qc.add();
      qc.term.left = left;
      qc.term.right = right;

      qc.remove(left);
      expect(qc.term).toEqual(right);
    });

    it("should replace itself with the left term when deleting right", () => {
      qc.add();
      qc.term.left = left;
      qc.term.right = right;


      qc.remove(right);
      expect(qc.term).toEqual(left);
    });
  });
});
