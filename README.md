# angular-tree

## 使用方法

一个简单的基于angular1.5.x版本的tree组件。

`<tree data="vm.tree" item-template="vm.itemTemplate"></tree>`
data是数据，item-template是自定义模板。

将tree导入到你的js文件中

`import tree from './tree';
`

然后在module添加依赖

`angular.module('app', [tree])`

就可以用了 O(∩_∩)O~

## 说明
tree的内容以及操作交给用户自定义，tree只负责展示结构。
如果觉得样式不好看的，源码随便改。

##效果
![tree](https://github.com/mmmaming/angular-tree/blob/master/tree.png?raw=true)