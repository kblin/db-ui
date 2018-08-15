export default class StatsService {
  constructor($http) {
    this.$http = $http;
  }

  getStats() {
    return this.$http.get('/api/v2.0/stats');
  }
};
