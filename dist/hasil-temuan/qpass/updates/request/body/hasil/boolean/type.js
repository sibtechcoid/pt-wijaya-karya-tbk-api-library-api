"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_2 = require("@dikac/t-number/boolean/type");
const type_3 = require("@dikac/t-string/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        level: positive_1.default,
        ruangan: positive_1.default,
        sampel: positive_1.default,
        hasil: type_2.default,
        catatan: type_3.default,
        lampiran: (v) => array_of_1.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
