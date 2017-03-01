/**
 * Created by Ma Ming on 2016/11/24.
 */
import angular from 'angular';
import treeItemUrl from './treeItem.tpl.html'

export default angular.module('treeItem', [])
    .directive('treeItem', function ($compile) {
        return {
            restrict: 'E',
            link(scope, element) {
                // 将父scope绑到当前scope的原型链上
                Object.setPrototypeOf(scope, scope.baseScope);
                // scope.__proto__ = scope.baseScope;
                element.find('ul').find('li').append(scope.itemTemplate);
                element.find('ul').find('li').children().css({display: 'inline-block'});
                $compile(element.find('ul').find('li').contents())(scope);
            },
            controllerAs: '$ctrl',
            controller() {
                const vm = this;
                vm.childShow = false;
                vm.showChild = function () {
                    vm.childShow = !vm.childShow;
                };
                vm.isLeaf = function(item) {
                    return !item.children || item.children.length === 0;
                }

            },
            template: treeItemUrl,
            scope: {
                item: '=',
                itemTemplate: '<',
                baseScope: '<'
            }
        };
    })
    .name