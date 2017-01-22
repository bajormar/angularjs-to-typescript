import * as angular from 'angular';

import ordersService from './orders.srvc';

export default angular.module('app.marius.services.orders', [
]).service('OrdersService', ordersService).name;