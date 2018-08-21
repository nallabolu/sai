"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SalesMan = /** @class */ (function () {
    function SalesMan(id, salesManName, mobileNumber) {
        this._id = id;
        this._mobileNumber = mobileNumber;
        this._salesManName = salesManName;
    }
    SalesMan.prototype.toString = function () {
        return this._salesManName + "," + this._mobileNumber + "," + this._id;
    };
    return SalesMan;
}());
exports.SalesMan = SalesMan;
