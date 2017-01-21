import angular from 'angular';

import ordersService from './orders.srvc.js';

export default angular.module('app.marius.services.orders', [
]).service('OrdersService', ordersService).name;