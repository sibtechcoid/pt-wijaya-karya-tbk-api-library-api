"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_1 = require("@dikac/t-object/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("@dikac/t-number/boolean/type");
const type_3 = require("@dikac/t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: positive_1.default,
        lampiran: (p) => undefinable_1.default(p, (p) => array_of_1.default(p, (p) => type_3.default(p))),
        level: (v) => undefinable_1.default(v, positive_1.default),
        audit: (v) => undefinable_1.default(v, positive_1.default),
        sampel: (v) => undefinable_1.default(v, positive_1.default),
        ruangan: (v) => undefinable_1.default(v, positive_1.default),
        hasil: (v) => undefinable_1.default(v, type_2.default),
        catatan: (v) => undefinable_1.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
