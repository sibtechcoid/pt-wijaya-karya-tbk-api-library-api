"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("../../../../../../../deactivate/read/request/body/boolean/type");
const type_3 = require("@dikac/t-enum/boolean/type");
const status_1 = require("../../../../../status/status");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const type_4 = require("../../../../../type/type");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (value.object !== undefined) {
        if (!finite_1.default(value.object)) {
            return false;
        }
    }
    if (value.status !== undefined) {
        if (!type_3.default(value.status, status_1.default)) {
            return false;
        }
    }
    if (value.type !== undefined) {
        if (!type_3.default(value.type, type_4.default)) {
            return false;
        }
    }
    if (value.plan !== undefined) {
        if (!array_of_1.default(value.plan, compatible_1.default) || value.plan.length !== 2) {
            return false;
        }
    }
    if (value.realize !== undefined) {
        if (!array_of_1.default(value.realize, compatible_1.default) || value.realize.length !== 2) {
            return false;
        }
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map