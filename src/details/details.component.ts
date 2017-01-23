import { Component, Input } from 'ng-metadata/core';
import { Order } from '../models/order.model';

@Component({
    selector: 'marius-list-details',
    styles: [ require( './details.less' ) ],
    template: `
    <div>
        Details component html
        <div>
            SelectedOrder:
            <div>
                {{$ctrl.selectedItem}}
            </div>
        </div>
    </div>
    `
})
export class MariusDetailsComponent {
    @Input('<') selectedItem: Order;
}
