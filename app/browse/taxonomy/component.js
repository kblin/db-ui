export default class TaxonomyComponent {
  constructor($scope) {
    this.$scope = $scope;
    this.active = null;

    $scope.tree_types = {
      default: {
        icon: "fa fa-sitemap",
      },
      strain: {
        icon: "fa fa-circle-o"
      }
    };
    // `this` is broken in callbacks, so wrap the actual callback
    $scope.activate_cb = (event, ctx) => {
        this.activate_cb(event, ctx);
    };
  }

  activate_cb(event, ctx) {
    // Wrap in $apply so angular notices that things changed
    this.$scope.$apply(() => {
      this.active = ctx.node.id;
      this.$scope.$broadcast('genomeSelected', ctx.node.id);
    });
  }
};
