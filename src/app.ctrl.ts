import OrdersService from "./services/orders/orders.srvc";
import Order from "./models/order.model";

export default class AppController implements ng.IComponentController {
    public orders: Order[];
    public selectedOrder: Order;

    constructor(private OrdersService: OrdersService) {}

    $onInit(): void {
        this.OrdersService.loadOrders().then((orders: Order[]) => {
            this.orders = orders;
        });
    }

    public selectOrder(id: number): void {
        this.selectedOrder = this.orders.find((order: Order) => order.id === id);
    }
}