import angular from 'angular';

import ordersService from './orders.srvc.ts';

export default angular.module('app.marius.services.orders', [
]).service('OrdersService', ordersService).name;