import angular from 'angular';
import listModuleName from './list';
import detailsModuleName from './details';
import ordersServiceModuleName from './services/orders';

import appComponent from './app.cmp.js';
import './app.less';

export default angular.module('app.marius', [
    ordersServiceModuleName,
    listModuleName,
    detailsModuleName
]).component('mariusApp', appComponent).name;