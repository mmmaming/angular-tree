/**
 * Created by Ma Ming on 2016/11/24.
 */
import angular from 'angular';
import treeItemTpl from './treeItem.tpl.html';
treeItemCtrl.$inject = ['$scope', '$compile'];
function treeItemCtrl($scope, $compile) {
    const vm = this;
    // console.log(vm.data1);
    // $compile(treeItemTpl)($scope);
}
const treeItem = {
    template: treeItemTpl,
    controller: treeItemCtrl,
    bindings: {
        data1: '='
    },
    transclude: true
};

export default angular.module('treeItem', [])
    .component('treeItem', treeItem)
    .name