export default class OrdersService {
    constructor($q) {
        this.$q = $q;

        this.orders = [{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }];
    }

    loadOrders() {
        return this.$q.resolve(this.orders);
    }
}