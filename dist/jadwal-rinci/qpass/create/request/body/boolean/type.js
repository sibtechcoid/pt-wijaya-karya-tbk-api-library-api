"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let create = {
        auditor: (v) => array_of_1.default(v, positive_1.default),
        audit: positive_1.default,
        level: positive_1.default,
        selesai: compatible_1.default,
        mulai: compatible_1.default,
        fungsi: (v) => array_of_1.default(v, positive_1.default)
    };
    return structure_1.default(value, create);
}
exports.default = Type;
