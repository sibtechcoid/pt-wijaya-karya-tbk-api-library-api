"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-enum/boolean/type");
const category_1 = require("../../../../category/category");
const type_2 = require("../../../../../../qpass/project/create/request/body/boolean/type");
const status_1 = require("../../../../status/status");
const finite_1 = require("t-number/boolean/finite");
const array_of_1 = require("t-array/boolean/array-of");
const type_3 = require("../../../../../../member/create/request/body/boolean/type");
const compatible_1 = require("t-date/boolean/compatible");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value.status, status_1.default)) {
        return false;
    }
    if (!type_1.default(value.category, category_1.default)) {
        return false;
    }
    //if(value.object !== undefined){
    if (!array_of_1.default(value.plan, compatible_1.default) || value.plan.length !== 2) {
        return false;
    }
    // }
    //if(value.object !== undefined){
    if (!array_of_1.default(value.realize, compatible_1.default) || value.realize.length !== 2) {
        return false;
    }
    // }
    //if(value.object !== undefined){
    if (!finite_1.default(value.object)) {
        return false;
    }
    // }
    //if(value.object !== undefined){
    if (!array_of_1.default(value.members, type_3.default)) {
        return false;
    }
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map