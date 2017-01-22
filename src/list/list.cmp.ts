import * as template from './list.tpl.html';
import controller from './list.ctrl';

export default class ListComponent implements ng.IComponentOptions {
    public controller: any;
    public template: any;
    public bindings: any;

    constructor() {
        this.controller = controller;
        this.template = template;
        this.bindings = {
            items: '<',
            selectedItem: '<',
            onItemClick: '&'
        }
    }
}