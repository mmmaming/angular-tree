/**
 * Created by Ma Ming on 2016/11/22.
 */
import angular from 'angular';
import treeTpl from './tree.tpl.html';
import treeItem from './treeItem';

treeCtrl.$inject = ['$scope'];
function treeCtrl($scope) {
    this.baseScope = $scope.$parent;
}

const tree = {
    template: treeTpl,
    controller: treeCtrl,
    bindings: {
        data: '=',
        itemTemplate: '<'
    }
};

export default
    angular.module('tree', [treeItem])
        .component('tree', tree)
        .name;