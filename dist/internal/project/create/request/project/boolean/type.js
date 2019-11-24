"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-number/boolean/type");
const type_3 = require("t-enum/boolean/type");
const compatible_1 = require("t-date/boolean/compatible");
const type_4 = require("../../member/boolean/type");
const category_1 = require("../../category/category");
const array_of_1 = require("t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.planned, compatible_1.default) || value.planned.length !== 2) {
        return false;
    }
    if (!array_of_1.default(value.realize, compatible_1.default) || value.realize.length !== 2) {
        return false;
    }
    if (!type_2.default(value.place)) {
        return false;
    }
    if (!array_of_1.default(value.members, type_4.default)) {
        return false;
    }
    if (!type_3.default(value.category, category_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map