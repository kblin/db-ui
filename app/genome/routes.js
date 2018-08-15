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
      template: '<div class="wide-container"><as-genome genome-id="{{$ctrl.id}}"></as-genome></div>',
      controller: function($stateParams) {
        this.id = $stateParams.id;
      },
    });
};

