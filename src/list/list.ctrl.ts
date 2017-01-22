import OrdersService from "../services/orders/orders.srvc";
import Order from "../models/order.model";

export default class ListComponentController implements ng.IComponentController {
    public loading: boolean;
    public selectedItem: Order;
    public items: Order[];
    public onItemClick: () => any;

    constructor() {}

    $onInit() {
        this.items = [];
    }

    $onChanges(onChangesObj: ng.IOnChangesObject) {
        if(onChangesObj['items'] && onChangesObj['items'].isFirstChange()) {
            this.items = [];
        }
    }

    reloadItems(): void {
        this.loading = true;
    }
}