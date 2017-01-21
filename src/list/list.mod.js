import angular from 'angular';

import listComponent from './list.cmp.js';
import './list.less';

export default angular.module('app.marius.list', [
]).component('mariusList', listComponent).name;