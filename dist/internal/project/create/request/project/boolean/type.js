"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-number/boolean/type");
const compatible_1 = require("t-date/boolean/compatible");
const array_of_1 = require("t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    // public planned : [Date|string, Date|string],
    //         public realize : [Date|string, Date|string],
    //         public place : number,
    //         public members : Member[],
    //         public category : Category
    if (!array_of_1.default(value.planned, compatible_1.default) && value.planned.length === 2) {
        return false;
    }
    if (!array_of_1.default(value.realize, compatible_1.default) && value.realize.length === 2) {
        return false;
    }
    if (!type_2.default(value.place)) {
        return false;
    }
    if (!type_2.default(value.members)) {
        throw new Error('implemented');
    }
    if (!type_2.default(value.category)) {
        throw new Error('implemented');
    }
    // throw new Error('implemented');
    // if(!IsString(value.abbreviation)) {
    //
    //     return false;
    // }
    //
    // if(!IsString(value.address)) {
    //
    //     return false;
    // }
    //
    // if(!IsString(value.abbreviation)) {
    //
    //     return false;
    // }
    //
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map