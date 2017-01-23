import { Component, Inject, Input, Output, EventEmitter } from 'ng-metadata/core';
import { Order } from '../models/order.model';

@Component({
    selector: 'marius-list',
    styles: [ require( './list.less' ) ],
    template: `
    <div>
        List component html
        <div class="list-container">
            <div class="list-item"
                 ng-repeat="item in $ctrl.items track by item.id"
                 ng-class="{'active': $ctrl.selectedItem.id === item.id}"
                 ng-click="$ctrl.onItemClick.emit({value: item.id})">
                list item
            </div>
        </div>
        <div>
            <button ng-click="$ctrl.reloadItems()">Reload items</button>
        </div>
    </div>
    `
})
export class MariusListComponent {
    loading: boolean;
    @Input('<') selectedItem: Order;
    @Input('<') items: Order[];
    @Output() onItemClick = new EventEmitter<void>();

    reloadItems(): void {
        this.loading = true;
    }
}
