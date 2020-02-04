"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/update/boolean/type");
const type_2 = require("../../../../../../singkatan/update/boolean/type");
const type_3 = require("../../../../../../id/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
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
    if (!undefinable_1.default(value.jenisUnit, positive_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
