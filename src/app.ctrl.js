export default class AppController {
    constructor(OrdersService) {
        this.OrdersService = OrdersService;
    }

    $onInit() {
        this.OrdersService.loadOrders().then(orders => {
            this.orders = orders;
        });
    }

    selectOrder(id) {
        this.selectedOrder = this.orders.find(order => order.id === id);
    }
}