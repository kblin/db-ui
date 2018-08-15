export default class GenomeService {
  constructor($http) {
    this.$http = $http;
  }

  getGenome(genomeId) {
    return this.$http.get('/api/v1.0/assembly/' + genomeId);
  }
};
