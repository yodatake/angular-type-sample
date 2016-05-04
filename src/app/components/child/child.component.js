"use strict";
function child() {
    return {
        templateUrl: 'app/components/child/child.html',
        controller: ChildController,
        bindings: {
            'child': '<',
            'status': '<'
        }
    };
}
exports.child = child;
var ChildController = (function () {
    function ChildController() {
    }
    ChildController.prototype.$onInit = function () {
    };
    ChildController.prototype.$onChanges = function (changesObj) {
    };
    ChildController.prototype.$doCheck = function () {
        alert(this.status);
    };
    return ChildController;
}());
exports.ChildController = ChildController;
var Child = (function () {
    function Child(name, age) {
        this.name = name;
        this.age = age;
    }
    return Child;
}());
exports.Child = Child;
