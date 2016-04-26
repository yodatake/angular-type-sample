"use strict";
var index_config_1 = require('./index.config');
var index_route_1 = require('./index.route');
var index_run_1 = require('./index.run');
var main_controller_1 = require('./main/main.controller');
var parent_component_1 = require('./components/parent/parent.component');
var child_component_1 = require('./components/child/child.component');
var typeSample;
(function (typeSample) {
    'use strict';
    angular.module('typeSample', ['ngCookies', 'ngTouch', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
        .constant('malarkey', malarkey)
        .constant('moment', moment)
        .config(index_config_1.config)
        .config(index_route_1.routerConfig)
        .run(index_run_1.runBlock)
        .controller('MainController', main_controller_1.MainController)
        .component('parent', parent_component_1.parent())
        .component('child', child_component_1.child());
})(typeSample || (typeSample = {}));
