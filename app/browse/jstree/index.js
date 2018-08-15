import angular from 'angular';
import 'jstree';
import 'jstree/dist/themes/default/style.css';

class JSTreeDirective {
  constructor($http) {
    this.$http = $http;
    this.restrict = 'E';
    this.tree = null;
    this.config = {
      core: {},
    };
    this.plugins = {
      changed: false,
      checkbox: false,
      conditionalselect: false,
      contextmenu: false,
      dnd: false,
      search: false,
      state: false,
      types: false,
      unique: false,
      wholerow: false,
    };
  }

  link(scope, element, attribute) {
    this.config.core.data = {
      url: attribute.treeAjax,
      data: (node) => {
        return {'id': node.id != '#' ? node.id : 1};
      },
    };

    this.setupPlugins(scope, element, attribute);
    this.tree = jQuery(element).jstree(this.config);
    this.setupEvents(scope, element, attribute);
  }

  setupEvents(scope, element, attribute) {
    let events = attribute.treeEvents.split(';');
    for (var i = 0; i < events.length; i++) {
      if (events[i].length == 0) {
        continue;
      }
      let [event, callback, ...rest] = events[i].split(':');
      if (event.indexOf('.') < 0) {
        event += '.jstree';
      }
      this.tree.on(event, scope[callback]);
    }
  }

  setupPlugins(scope, element, attribute) {
    if (!attribute.treePlugins) {
      return;
    };

    this.config.plugins = attribute.treePlugins.split(',');
    for (var i = 0; i < this.config.plugins.length; i++) {
      var plugin = this.config.plugins[i];
      this.plugins[plugin] = true;
    }

    if (this.plugins.types && attribute.treeTypes) {
      this.config.types = scope[attribute.treeTypes];
    }

    if (this.plugins.search) {
      let timeout = null;
      let searchbox = null;

      this.config.search = {
        'show_only_matches': true,
      };

      if (attribute.treeSearchUrl) {
        this.config.search.ajax = {
          url: attribute.treeSearchUrl
        };
      }

      if (attribute.treeSearchInput) {
        searchbox = jQuery('#' + attribute.treeSearchInput);
      }
      if (!searchbox) {
        searchbox = element.next();
        if (element.next().attr('class') !== 'ng-tree-search') {
          searchbox = element.after('<input type="text" placeholder="Search Term" class="ng-tree-search" />')
            .next()
        }
      }

      searchbox.on('keyup', (event) => {
        if(timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          this.tree.jstree(true).search(event.target.value);
        }, 500);
      });
    }
  }

  get(url, callback) {
    return this.$http.get(url).then((data) => {
      if (callback) { callback(data) }
    });
  }

}


export default angular.module('antismash.db.browse.jstree', [])
  .directive('jsTree', ['$http', function($http){ return new JSTreeDirective($http)}])
  .name;
