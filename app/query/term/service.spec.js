import CategoryService from './service.js';


class FakeAvailableTerms {
  constructor() {
    this.responses = {
      'foo': {
        'b': ['bar', 'baz', 'blubb'],
        'ba': ['bar', 'baz'],
        'bl': ['blubb'],
        'bar': ['bar'],
        'baz': ['baz'],
        'blu': ['blubb'],
        'blub': ['blubb'],
        'blubb': ['blubb'],
      }
    };
  }

  get(path) {
  }
};


describe("CategoryService", () => {
});
