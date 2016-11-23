/**
 * Created by Ma Ming on 2016/11/22.
 */
import angular from 'angular';
import treeUrl from './tree.tpl.html';
function treeCtrl() {

}
const doo = {
    restrict: 'EA',
    templateUrl: treeUrl,
    controller: treeCtrl,
    bindings: {
      data: '='
    }
};

export default angular.module('tree', [])
    .component('tree', doo)
    .name;