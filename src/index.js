import angular from 'angular';
import './index.css';
import tree from './tree';
import '../node_modules/font-awesome/css/font-awesome.css';

angular.module('app', [tree])
    .controller('myCtrl', treeFn);
treeFn.$inject = ['$scope'];


function treeFn() {
    const vm = this;
    vm.itemTemplate = '<div ng-click="vm.add(item)" ng-dblclick="vm.close(item)" ng-show="vm.id !== item.id">' +
        '{{item.name}}</div>' +
        '<input ng-dblclick="vm.close(item)" type="text" ng-model="item.name" ng-show="vm.id === item.id"><button ng-click="vm.del(item)">删除</button>';
    vm.add = function(item) {
        console.log(item);
    };

    vm.close = function(item) {
        vm.id = item.id;
    };
    vm.del = function(item) {
        deleteItem(vm.tree, item);
    }
    function deleteItem (arr, item) {
        arr.forEach((v, i) => {
            if(v.id === item.id) {
                arr.splice(i, 1);
            }
            if (v.children && v.children.length !== 0) {
                deleteItem(v.children, item);
            }
        })
    }

    vm.tree = [{
        name: 'PC游戏',
        id: 1,
        children: [
            {
                name: '角色扮演',
                id: 2,
                children: [
                    {
                        name: '月影传说',
                        id: 3
                    },
                    {
                        name: '仙剑奇侠传',
                        id: 4,
                        children: [
                            {
                                name: '仙剑客栈',
                                id: 5,
                                children: []
                            },
                            {
                                name: '仙剑问情',
                                id: 6,
                                children: []
                            },
                            {
                                name: '仙剑再回首',
                                id: 7,
                                children: []
                            }
                        ]
                    },
                    {
                        name: '武林群侠传',
                        id: 8,
                        children: [
                            {
                                name: '江湖小虾米',
                                id: 9,
                                children: []
                            },
                            {
                                name: '河洛英雄传',
                                id: 10,
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                name: '即时MOBA',
                id: 11,
                children: [
                    {
                        name: '星际争霸',
                        id: 12,
                        children: []
                    },
                    {
                        name: '澄海3C',
                        id: 13,
                        children: []
                    },
                    {
                        name: '遗迹保卫战',
                        id: 14,
                        children: []
                    }
                ]
            }
        ]
    }];


}
