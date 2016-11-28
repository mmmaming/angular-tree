/**
 * Created by Ma Ming on 2016/11/24.
 */
import angular from 'angular';
import treeItemTpl from './treeItem.tpl.html';

export default angular.module('treeItem', [])
    .directive('treeItem', ['$compile', function($compile) {
        return {
            restrict: 'EA',
            template: treeItemTpl,
            scope: {
                data: '=',
                temp: '='
            },
            link: function(scope, element) {
                scope = scope.$parent;
                element.prepend(scope.temp);
                $compile(element.contents())(scope);
            }
        }
    }])
    .name;