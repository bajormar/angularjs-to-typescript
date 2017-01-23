import {Inject, Injectable} from 'ng-metadata/core';

import {Order} from '../models/order.model';

@Injectable()
export class OrdersService {
    private orders: Order[] = [{
        id: 1
    }, {
        id: 2
    }, {
        id: 3
    }];

    constructor(@Inject('$q') private $q: ng.IQService) {}

    loadOrders(): ng.IPromise<Order[]> {
        return this.$q.resolve(this.orders);
    }
}
