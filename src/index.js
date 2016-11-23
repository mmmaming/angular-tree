import angular from 'angular';
import './index.css';
import tree from './component';

angular.module('app', [tree])
    .controller('myCtrl', treeFn);

function treeFn() {
    const vm = this;
    vm.tree = 'this is a tree';
}
