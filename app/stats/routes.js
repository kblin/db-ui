routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('stats`', {
      url: '/stats',
      template: '<as-stats></as-stats>',
    });
};
