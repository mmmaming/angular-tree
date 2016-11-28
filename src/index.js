import angular from 'angular';
import './index.css';
import tree from './tree';
import treeItem from './treeItem';

angular.module('app', [tree, treeItem])
    .controller('myCtrl', treeFn);
treeFn.$inject = ['$scope'];


function treeFn($scope) {
    $scope._$scope = $scope;
    $scope.itemTemplate = '<div ng-dblclick="edit()">' +
        '<span ng-show="!durEdit">{{data.name}}</span>' +
        '<input ng-show="durEdit" type="text" ng-model="data.name">' +
        '</div>';
    $scope.tree = [{
        name: 'PC游戏',
        num: 1,
        children: [
            {
                name: '角色扮演',
                num: 1,
                children: [
                    {
                        name: '月影传说',
                    },
                    {
                        name: '仙剑奇侠传',
                        children: [
                            {
                                name: '仙剑客栈',
                                children: []
                            },
                            {
                                name: '仙剑问情',
                                children: []
                            },
                            {
                                name: '仙剑再回首',
                                children: []
                            }
                        ]
                    },
                    {
                        name: '武林群侠传',
                        children: [
                            {
                                name: '江湖小虾米',
                                children: []
                            },
                            {
                                name: '河洛英雄传',
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                name: '即时MOBA',
                children: [
                    {
                        name: '星际争霸',
                        children: []
                    },
                    {
                        name: '澄海3C',
                        children: []
                    },
                    {
                        name: '遗迹保卫战',
                        children: []
                    }
                ]
            }
        ]
    }];


}
