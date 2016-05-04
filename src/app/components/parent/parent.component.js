"use strict";
var child_component_1 = require('../child/child.component');
function parent() {
    return {
        templateUrl: 'app/components/parent/parent.html',
        controller: ParentController,
        bindings: {
            title: '@?'
        }
    };
}
exports.parent = parent;
var ParentController = (function () {
    function ParentController(moment) {
        this.childlen = new Array();
        this.status = new StatusObj();
    }
    ParentController.prototype.toggleHide = function () {
        this.status.hide = (!this.status.hide);
        this.status = this.status;
    };
    ParentController.prototype.$onInit = function () {
        this.childlen.push(new child_component_1.Child('Yoda', 30));
        this.childlen.push(new child_component_1.Child('Kaori', 29));
    };
    return ParentController;
}());
exports.ParentController = ParentController;
var StatusObj = (function () {
    function StatusObj() {
        this.hide = false;
    }
    return StatusObj;
}());
exports.StatusObj = StatusObj;
