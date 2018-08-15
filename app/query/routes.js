routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('query', {
      url: '/query',
      template: '<div class="wide-container"><as-query></as-query></div>',
      params: {
        search_string: null
      }
    })
};

