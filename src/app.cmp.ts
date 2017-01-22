import * as template from './app.tpl.html';
import controller from './app.ctrl';

export default class AppComponent implements ng.IComponentOptions {
    public controller: any;
    public template: any;

    constructor() {
        this.controller = controller;
        this.template = template;
    }
}