/**
 * Created by Ma Ming on 2016/11/22.
 */
import angular from 'angular';
import treeTpl from './tree.tpl.html';
treeCtrl.$inject = ['$scope'];
function treeCtrl($scope) {

    const vm = this;
    console.log(vm.data);
    $scope.$watch(vm.data, (newValue) => {
        console.log(newValue);
    })
}
const tree = {
    template: treeTpl,
    controller: treeCtrl,
    bindings: {
      data: '='
    },
    transclude: true
};

export default angular.module('tree', [])
    .directive('trans', [function() {
        return {
            restrict: 'EA',
            link: function(scope, tElement) {
                console.log(scope);
                console.log(tElement);
            }
        }
    }])
    .component('tree', tree)
    .name;