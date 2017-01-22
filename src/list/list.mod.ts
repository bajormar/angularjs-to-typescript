import * as angular from 'angular';

import ListComponent from './list.cmp';
import './list.less';

export default angular.module('app.marius.list', [
]).component('mariusList', new ListComponent()).name;