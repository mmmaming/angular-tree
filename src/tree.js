/**
 * Created by Ma Ming on 2016/11/22.
 */
import angular from 'angular';
import treeTpl from './tree.tpl.html';

export default angular.module('tree', [])
    .directive('tree', [function() {
        return {
            restrict: 'EA',
            template: treeTpl,
            scope: {
                data: '=',
                temp: '='
            },
            link: function(scope, tElement) {
                console.log(123);
            }
        }
    }])
    .name;