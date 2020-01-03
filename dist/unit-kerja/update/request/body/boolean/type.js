"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("../../../../../nama/update/boolean/type");
const type_4 = require("../../../../../singkatan/update/boolean/type");
const type_5 = require("../../../../../id/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_5.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (value.address !== undefined) {
        if (!type_2.default(value.address)) {
            return false;
        }
    }
    if (value.level !== undefined) {
        if (!finite_1.default(value.level)) {
            return false;
        }
    }
    if (value.type !== undefined) {
        if (!finite_1.default(value.type)) {
            return false;
        }
    }
    if (value.business !== undefined) {
        if (!finite_1.default(value.business)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map