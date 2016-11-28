/**
 * Created by Ma Ming on 2016/11/26.
 */
import angular from 'angular';

treeDirective.$inject = ['$compile', '$document'];
function initTree(treeElem, attributes, $compile, $document) {
    var itemTemplate = getItemTemplate($document[0], treeElem[0]);
    var treeModelExpr = attributes.src || attributes.ngTree;
    var contextName = 'item';
    var selectExpr = itemTemplate.attr('select');
    var tree = {
        itemTemplate: $compile(itemTemplate),
        contextName: contextName,
        trackSelection: !!selectExpr,
        setItem: function (scope, value) {
            scope[this.contextName] = value;
        },
        treeModelWatch: function(scope) {
            return scope.$eval(treeModelExpr);
        },
        collectionWatch: function(scope) {
            return scope.$eval(treeModelExpr);
        }

    }
    return tree;
}
function getItemTemplate(document, treeElem) {
    var itemTemplate;
    while (treeElem.childNodes.length > 0) {
        var childNode = treeElem.childNodes[0];
        treeElem.removeChild(childNode);
        // 指令里面需要套<li>标签
        if(childNode.nodeName === 'LI') {
            if(itemTemplate) {
                throw new Error('Tree ul must contain only a single li template');
            }
            var createWrapper = childNode.childNodes.length === 0;
            var innerNodes = 0;
            console.log(childNode.childNodes);
            for (var i = 0; i < childNode.childNodes.length; i += 1) {
                var innerNode = childNode.childNodes[i];
                if (innerNode.nodeName === '#text') {
                    if (! /^\s*$/.test(innerNode.nodeValue)) {
                        createWrapper = true;
                        break;
                    }
                } else if (innerNodes > 0) {
                    createWrapper = true;
                    break;
                } else {
                    innerNodes += 1;
                }
            }
            if (createWrapper) {
                var wrapperEl = document.createElement('DIV');
                while (childNode.childNodes.length > 0) {
                    wrapperEl.appendChild(childNode.childNodes[0]);
                }
                childNode.appendChild(wrapperEl);
            }
            var ulEl = document.createElement('UL');
            ulEl.className = treeElem.className;
            childNode.appendChild(ulEl);

            itemTemplate = angular.element(childNode);
            itemTemplate.addClass('ng-tree-node');
        }
    }
    return itemTemplate || angular.element('<li class="ng-tree-node"><div>{{item}}</div><ul></ul></li>');
}

function loadTree(scope, tree, listElem, listWatch) {
    scope.$watch(listWatch, function(newList) {
        if(typeof newList === 'undefined' || newList === null || newList.length === 0) {
            listElem.children().remove();
            return;
        }
        angular.forEach(newList, function (item, itemIndex) {
            var listChildElems = listElem.children();
            console.log(itemIndex); 
            if(itemIndex >= listChildElems.length) {
                addListItem(scope, tree, listElem, item, -1);
                // return;
            }
            // for (var childElemIndex = itemIndex; childElemIndex < listChildElems.length; childElemIndex += 1) {
            //
            // }
        })
    })
}
function addListItem(scope, tree, listElem, item, index) {
    var itemScope = scope.$new();
    tree.setItem(itemScope, item);
    var itemElem = tree.itemTemplate(itemScope, angular.noop);
    console.log(itemElem);
    if (tree.trackSelection) {
        itemScope.$selected = false;
    }
    insertListItem(listElem, itemElem, index);
    var childrenListElem = itemElem.children().eq(1);
    loadTree(itemScope, tree, childrenListElem, tree.collectionWatch);
}
function insertListItem(listElem, itemElem, index) {
    if (index < 0) {
        listElem.append(itemElem);
    } else if (index === 0) {
        listElem.prepend(itemElem);
    } else {
        listElem.children().eq(index - 1).after(itemElem);
    }
}
function treeDirective($compile, $document) {
    return {
        compile: function (elem, attrs) {
            // console.log(attrs);
            var tree = initTree(elem, attrs, $compile, $document);
            // console.log($document[0]);
            return function (scope, elem) {
                elem = elem.append('<LI>111111111</LI>');
                loadTree(scope, tree, elem, tree.treeModelWatch);
            }
        }
    }
}

export default angular.module('tree2', [])
    .directive('tree2', treeDirective)
    .name;
