"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_1 = require("@dikac/t-string/boolean/type");
const type_2 = require("@dikac/t-object/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    let sort = {
        nama: type_1.default,
        level: (v) => array_of_1.default(v, positive_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
