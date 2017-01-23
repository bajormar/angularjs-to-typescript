import { Component, OnInit, Inject } from 'ng-metadata/core';
import { Order } from '../models/order.model';
import { OrdersService } from '../services/orders.service';

@Component({
    selector: 'marius-app',
    providers: [ OrdersService ],
    styles: [ require( './app.less' ) ],
    template: `
    <div>
        <div>
                {{$ctrl.orders}}
            <marius-list 
                items="$ctrl.orders"
                selected-item="$ctrl.selectedOrder"
                on-item-click="$ctrl.selectOrder($event)">
            </marius-list>
        </div>
        <div>
            <marius-list-details 
                selected-item="$ctrl.selectedOrder">
            </marius-list-details>
        </div>
    </div>
    `
})
export class AppComponent implements OnInit {
    orders: Order[];
    selectedOrder: Order;

    constructor(private OrdersService: OrdersService) {}

    ngOnInit() {
        this.OrdersService.loadOrders().then((orders: Order[]) => {
            this.orders = orders;
        });
    }

    public selectOrder($event): void {
        this.selectedOrder = this.orders.find((order: Order) => order.id === $event.value);
    }
}
