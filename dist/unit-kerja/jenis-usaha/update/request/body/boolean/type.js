"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/update/boolean/type");
const type_2 = require("../../../../../../singkatan/update/boolean/type");
const type_3 = require("../../../../../../id/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!undefinable_1.default(value.jenisUnit, finite_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map