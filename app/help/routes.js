routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('help', {
      url: '/help',
      template: require('./help.html')
    });
};

