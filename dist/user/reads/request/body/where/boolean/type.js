"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("../../../../../../deactivate/read/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.position !== undefined) {
        if (!finite_1.default(value.position) && value.position !== null) {
            return false;
        }
    }
    if (value.name !== undefined) {
        if (!type_2.default(value.name)) {
            return false;
        }
    }
    if (value.abbreviation !== undefined) {
        if (!type_2.default(value.abbreviation)) {
            return false;
        }
    }
    if (value.phone !== undefined) {
        if (!type_2.default(value.phone) && value.phone !== null) {
            return false;
        }
    }
    if (value.email !== undefined) {
        if (!type_2.default(value.email) && value.email !== null) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map