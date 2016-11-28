/**
 * Created by Ma Ming on 2016/11/25.
 */
import angular from 'angular';
import treeTpl from './tree1.tpl.html';
treeCtrl.$inject = ['$scope'];
function treeCtrl() {
    const vm = this;

}
treeDirective.$inject = ['$compile'];
function treeDirective($compile) {
    return {
        restrict: 'EA',
        template: treeTpl,
        // scope: {
        //     data: '=',
        //     temp: '=',
        //     item: '='
        // },
        // bindToController: true,
        link: function(scope, element, attrs) {
            // element.prepend(scope.temp);
            console.log(attrs);
            element.prepend(attrs.temp);
            $compile(element.contents())(scope);
        }
    }
}

export default angular.module('tree1', [])
    .directive('tree1', treeDirective)
    .name;

