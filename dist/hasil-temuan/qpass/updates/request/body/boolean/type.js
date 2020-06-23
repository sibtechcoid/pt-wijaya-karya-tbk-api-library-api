"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../hasil/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!positive_1.default(value.audit)) {
        return false;
    }
    return array_of_1.default(value.hasil, type_2.default);
}
exports.default = Type;
