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
    let [_, cat, hint] = path.match(/\/api\/v1\.0\/available\/(\w+)\/(\w+)/);
    if (!cat || !hint) {
      return [];
    }
    return Promise.resolve(this.responses[cat][hint]);
  }
};

let service;
let $http;

describe("CategoryService", () => {
  beforeEach(() => {
    $http = new FakeAvailableTerms();
    service = new CategoryService($http);
  });

  describe("getTermHints", () => {
    it("should return some options", () => {
      return expect(service.getTermHints('foo', 'b')).resolves.toBe($http.responses.foo.b);
    });
  });
});
