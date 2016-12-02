import angular from 'angular';
import './index.css';
import tree from './tree';
import '../node_modules/font-awesome/css/font-awesome.css';

angular.module('app', [tree])
    .controller('myCtrl', treeFn);
treeFn.$inject = ['$scope'];


function treeFn() {
    const vm = this;
    vm.itemTemplate = '<div ng-click="vm.add(item)" ng-dblclick="vm.close(item)" ng-show="!item.show">{{item.name}}</span></div><input ng-dblclick="vm.close(item)" type="text" ng-model="item.name" ng-show="item.show">';
    vm.add = function(item) {
        console.log(item);
    };
    vm.close = function(item) {
        item.show = !item.show;
    };

    vm.tree = [{
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
