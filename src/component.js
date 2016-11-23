/**
 * Created by Ma Ming on 2016/11/22.
 */
import angular from 'angular';
const doo = {
    restrict: 'EA',
    link: (scope, element, attr) => {
        element[0].style.border = '1px solid red';
    }
};
export default angular.module('tree', [])
    .directive('tree', () => doo)
    .name;