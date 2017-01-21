export default class ListController {
    constructor(OrdersService) {
        this.OrdersService = OrdersService;
    }

    reloadItems() {
        this.loading = true;
        this.OrdersService.loadOrders().then(orders => {
            this.orders = orders;
            this.loading = false;
        });
    }
}