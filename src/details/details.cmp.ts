import * as template from './details.tpl.html';
import controller from './details.ctrl';

export default class DetailsComponent implements ng.IComponentOptions {
    public controller: any;
    public template: any;
    public bindings: any;

    constructor() {
        this.controller = controller;
        this.template = template;
        this.bindings = {
            selectedItem: '<',
        }
    }
}