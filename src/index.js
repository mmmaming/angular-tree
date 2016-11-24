import angular from 'angular';
import './index.css';
import tree from './tree';
import treeItem from './treeItem';

angular.module('app', [tree, treeItem])
    .controller('myCtrl', treeFn);

function treeFn() {
    const vm = this;
    vm.msg = 'this is a tree';
    vm.tree = [{
        id: 1,
        name: '华语歌坛',
        children: [
            {
                id: 2,
                name: '一线歌星',
                children: [
                    {
                        id: 21,
                        name: '陈奕迅'
                    },
                    {
                        id: 22,
                        name: '林俊杰',
                        children: [
                            {
                                id: 224,
                                name: '金莎',
                                children: []
                            },
                            {
                                id: 225,
                                name: '银莎',
                                children: []
                            },
                            {
                                id: 226,
                                name: '铁莎',
                                children: []
                            }
                        ]
                    },
                    {
                        id: 23,
                        name: '张学友',
                        children: [
                            {
                                id: 234,
                                name: '张信哲',
                                children: []
                            },
                            {
                                id: 235,
                                name: '李玖哲',
                                children: []
                            },
                            {
                                id: 236,
                                name: '赵天哲',
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: '周杰伦',
                children: [
                    {
                        id: 4,
                        name: '杨宗纬',
                        children: []
                    },
                    {
                        id: 5,
                        name: '庾澄庆',
                        children: []
                    },
                    {
                        id: 6,
                        name: '金志文',
                        children: []
                    }
                ]
            }
        ]
    }];
}
