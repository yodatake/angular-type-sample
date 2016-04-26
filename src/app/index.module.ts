/// <reference path="../../typings/main.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { parent } from './components/parent/parent.component';
import { child } from './components/child/child.component';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module typeSample {
  'use strict';

  angular.module('typeSample', ['ngCookies', 'ngTouch', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .component('parent', parent())
    .component('child', child());
}
