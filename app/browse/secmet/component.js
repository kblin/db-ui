export default class SecMetComponent {
  constructor($scope, $window) {
    this.$scope = $scope;
    this.$window = $window;

    $scope.tree_types = {
      default: {
        icon: "fa fa-database",
      },
      strain: {
        icon: "fa fa-exchange"
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
      console.log(ctx.node);
      let assembly_id = ctx.node.original.assembly_id;
      let cluster_no = ctx.node.original.cluster_number;
      let url = `/go/${assembly_id}/${cluster_no}`;
      this.$window.open(url, '_new');
    });
  }
};

