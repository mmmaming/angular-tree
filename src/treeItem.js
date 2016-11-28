/**
 * Created by Ma Ming on 2016/11/24.
 */
import angular from 'angular';
import treeItemUrl from './treeItem.tpl.html'

export default angular.module('treeItem', [])
    .directive('treeItem', function ($compile) {
        return {
            restrict: 'E',
            link: function (scope, element) {
                Object.setPrototypeOf(scope, scope.baseScope);
                element.find('ul').prepend('<li class="">' + scope.itemTemplate + '</li>');


                $compile(element.find('ul').find('li').contents())(scope);
            },
            controller: function ($scope) {
                $scope.childShow = false;
                $scope.showChild = function () {
                    $scope.childShow = !$scope.childShow;
                };

                $scope.durEdit = false;
                $scope.edit = function () {
                    $scope.durEdit = !$scope.durEdit;
                };
            },
            template: treeItemUrl,
            scope: {
                data: '=',
                itemTemplate: '<',
                baseScope: '<'
            }
        };
    })
    .name