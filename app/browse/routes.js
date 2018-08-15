routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('browse', {
      url: '/browse',
      template: require('./browse.html'),
    })
};

