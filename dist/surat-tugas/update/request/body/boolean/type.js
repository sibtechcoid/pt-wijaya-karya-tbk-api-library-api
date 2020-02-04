"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("../../../../../id/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const positive_1 = require("@dikac/t-number/boolean/positive");
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
        if (!array_of_1.default(value.audit, positive_1.default)) {
            return false;
        }
    }
    if (value.lampiran !== undefined) {
        if (!array_of_1.default(value.lampiran, type_2.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
