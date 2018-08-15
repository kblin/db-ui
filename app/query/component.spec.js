import QueryComponent, { Query } from './component.js';

let component;
let service;
let state;

describe("Query", () => {
  it("should initialise with search type 'cluster'", () => {
    let query = new Query({});
    expect(query.search).toEqual("cluster");
  })
  it("should initialise with return type 'json'", () => {
    let query = new Query({});
    expect(query.return_type).toEqual("json");
  })
});

