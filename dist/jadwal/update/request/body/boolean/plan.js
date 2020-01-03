"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Plan(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.rencana !== undefined) {
        if (!array_of_1.default(value.rencana, compatible_1.default) || value.rencana.length !== 2) {
            return false;
        }
    }
    return true;
}
exports.default = Plan;
//# sourceMappingURL=plan.js.map