import template from './details.tpl.html';
import controller from './details.ctrl.js';

export default {
    template,
    controller,
    bindings: {
        selectedItem: '<'
    }
}