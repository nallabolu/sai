"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addInfo(target) {
    target.prototype.age = 45;
    console.log(target);
    return target;
}
var ExampleDeco = /** @class */ (function () {
    function ExampleDeco(name) {
        this._name = name;
    }
    ExampleDeco.prototype.toString = function () {
        return this._name;
    };
    ExampleDeco = __decorate([
        addInfo
    ], ExampleDeco);
    return ExampleDeco;
}());
var obj = new ExampleDeco("Sai");
console.log(obj.toString());
console.log(obj.age);
