export default class CategoryService {
  constructor($http) {
    this.$http = $http;
    this.categories = [
      {val: '', desc: '--- Select a category ---'},
    ];
  }
  getTermHints(category, hint) {
    return $http.get(`/api/v1.0/available/${category}/${hint}`);
};
