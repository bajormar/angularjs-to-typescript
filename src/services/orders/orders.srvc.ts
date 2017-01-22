import Order from "../../models/order.model";

export default class OrdersService {
    private orders: Order[];

    constructor(private $q: ng.IQService){
        this.orders = [{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }];
    }

    public loadOrders(): ng.IPromise<Order[]> {
        return this.$q.resolve(this.orders);
    }
}