import * as angular from 'angular';
import listModuleName from './list';
import detailsModuleName from './details';
import ordersServiceModuleName from './services/orders';

import AppComponent from './app.cmp';
import './app.less';

export default angular.module('app.marius', [
    ordersServiceModuleName,
    listModuleName,
    detailsModuleName
]).component('mariusApp', new AppComponent()).name;

angular.element(document).ready(() => {
    angular.bootstrap(document, ["app.marius"]);
});