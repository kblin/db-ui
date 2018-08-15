routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('start', {
      url: '/start',
      template: require('./start.html')
    });
};
