"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_1 = require("../../../../../../sort/mode/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    let sort = {
        reminder: (v) => undefinable_1.default(v, type_1.default),
        reminded: (v) => undefinable_1.default(v, type_1.default),
        created: (v) => undefinable_1.default(v, type_1.default),
        fase: (v) => undefinable_1.default(v, type_1.default),
        deactivate: (v) => undefinable_1.default(v, type_1.default),
        id: (v) => undefinable_1.default(v, type_1.default),
        rencana: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_1.default)),
        realisasi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_1.default)),
        updated: (v) => undefinable_1.default(v, type_1.default),
        suratTugas: (v) => undefinable_1.default(v, type_1.default),
        tipe: (v) => undefinable_1.default(v, type_1.default),
        perbaikan: (v) => undefinable_1.default(v, type_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
