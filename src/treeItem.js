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
                // prepend将li元素添加到ul的第一个子元素，然后只编译这个li元素，防止重复编译的情况
                element.find('ul').prepend('<li class="node-li">' + scope.itemTemplate + '</li>');
                $compile(element.find('ul').find('li').contents())(scope);
            },
            controller($scope) {
                $scope.childShow = false;
                $scope.showChild = function () {
                    $scope.childShow = !$scope.childShow;
                };

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