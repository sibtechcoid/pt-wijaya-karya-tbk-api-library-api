"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const compatible_1 = require("t-date/boolean/compatible");
const type_2 = require("../../../../../member/create/request/body/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.object !== undefined) {
        if (!array_of_1.default(value.plan, compatible_1.default) || value.plan.length !== 2) {
            return false;
        }
    }
    if (value.object !== undefined) {
        if (!array_of_1.default(value.realize, compatible_1.default) || value.realize.length !== 2) {
            return false;
        }
    }
    if (value.object !== undefined) {
        if (!finite_1.default(value.object)) {
            return false;
        }
    }
    if (value.object !== undefined) {
        if (!array_of_1.default(value.members, type_2.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map