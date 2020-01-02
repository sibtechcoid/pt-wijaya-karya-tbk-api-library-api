"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_1 = require("../../../../../member/create/request/body/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../../schedule/update/request/body/boolean/type");
const type_3 = require("../../../../../id/boolean/type");
function Type(value) {
    if (!type_3.default(value)) {
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
    if (value.members !== undefined) {
        if (!array_of_1.default(value.members, type_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map