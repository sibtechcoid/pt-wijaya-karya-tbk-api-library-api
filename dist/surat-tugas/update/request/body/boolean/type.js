"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("../../../../../id/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.nomer !== undefined) {
        if (!type_2.default(value.nomer)) {
            return false;
        }
    }
    if (value.audit !== undefined) {
        if (!array_of_1.default(value.audit, finite_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
