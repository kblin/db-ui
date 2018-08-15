import StatsComponent from './component';

let component;
let service;
let state;

class MockStatsService {
  constructor() {
    this.called = false;
    this.data = {
      clusters: [{count: 1, name: 'nrps', description: 'Nonribosomal peptide'}],
      num_clusters: 1,
      top_secmet_assembly_id: 'GCF_123456',
      top_secmet_species: 'E. xample',
      top_secmet_taxon: 1234,
      top_secmet_taxon_count: 1,
      num_genomes: 1,
      num_sequences: 1,
      top_species: 'E. xample',
      top_seq_taxon: 1234,
      top_seq_species: 'E. Unclassified',
      top_seq_taxon_count: 1
    };
    let resolveHelper;
    this.promise = new Promise((resolve, reject) => {
      resolveHelper = resolve;
    });
    this.resolveHelper = resolveHelper;
  }

  resolve() {
    this.resolveHelper({data: this.data})
    return this.promise;
  }

  getStats() {
    this.called = true;
    return this.promise;
  }
}

class MockState {
  constructor() {
    this.called = false;
    this.name = '';
    this.data = {};
  }

  go(name, data) {
    this.called = true;
    this.name = name;
    this.data = data;
  }
}


describe("StatsComponent", () => {
  beforeEach(() => {
    state = new MockState();
    service = new MockStatsService();
    component = new StatsComponent(state, service);
  });

  it("should be defined", () => {
    expect(component).toBeDefined();
    expect(component.general_stats).toBeDefined();
  });

  it("should have placeholder stats before the service query resolves", () => {
    expect(component.general_stats.num_clusters).toEqual("?");
  });

  it("should query for stats", () => {
    expect(service.called).toEqual(true);
  });

  describe("updateStats", () => {
    it("should have proper stats after the service query resolves", () => {
      return service.resolve().then(() => {
        expect(component.general_stats.num_clusters).toEqual(1);
      });
    });
  });

  describe("queryTopSpecies", () => {
    it("should call state.go to the right values", () => {
      return service.resolve().then(() => {
        component.queryTopSpecies();
        expect(state.called).toEqual(true);
        expect(state.name).toEqual('query');
        expect(state.data).toEqual({search_string: '[taxid]1234'});
      });
    });
  });
})
