import template from './details.tpl.html';
import controller from './details.ctrl.ts';

export default {
    template,
    controller,
    bindings: {
        selectedItem: '<'
    }
}