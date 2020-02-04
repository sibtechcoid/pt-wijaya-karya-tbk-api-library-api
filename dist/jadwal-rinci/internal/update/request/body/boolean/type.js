"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const type_1 = require("../../../../../../id/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let update = {
        id: positive_1.default,
        audit: (v) => undefinable_1.default(v, positive_1.default),
        selesai: (v) => undefinable_1.default(v, compatible_1.default),
        mulai: (v) => undefinable_1.default(v, compatible_1.default),
        fungsi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        prosedur: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        prosesBisnis: (v) => undefinable_1.default(v, positive_1.default),
        klausul: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        auditor: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
    };
    return structure_1.default(value, update);
}
exports.default = Type;
