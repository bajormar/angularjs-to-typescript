import template from './list.tpl.html';
import controller from './list.ctrl.ts';

export default {
    template,
    controller,
    bindings: {
        items: '<',
        selectedItem: '<',
        onItemClick: '&'
    }
}