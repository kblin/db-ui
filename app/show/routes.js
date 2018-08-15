routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
    .state('show', {
      url: '/show',
      abstract: true,
      template: '<ui-view/>',
    })
    .state('show.genome', {
      url: '/genome/:id',
      template: '<div class="wide-container"><as-genome genome-id="$resolve.id"></as-genome></div>',
      resolve: {
        id: ['$stateParams', function($stateParams) { return $stateParams.id }]
      },
    });
};

