import * as angular from 'angular';

import DetailsComponent from './details.cmp';
import './details.less';

export default angular.module('app.marius.details', [

]).component('mariusListDetails', new DetailsComponent()).name;