"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("../../../../../member/create/request/body/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_3 = require("../../../../../schedule/create/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!finite_1.default(value.object)) {
        return false;
    }
    if (!array_of_1.default(value.members, type_2.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map