"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("@dikac/t-string/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
const undefinable_2 = require("@dikac/t-undefined/boolean/undefinable");
const tinjauan_1 = require("../../../../tinjauan/tinjauan");
const type_3 = require("@dikac/t-enum/boolean/type");
const type_4 = require("@dikac/t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: positive_1.default,
        jadwalRinci: (v) => undefinable_1.default(v, positive_1.default),
        prosesBisnis: (v) => undefinable_1.default(v, positive_1.default),
        tinjauan: (v) => undefinable_2.default(v, (v) => type_3.default(v, tinjauan_1.default)),
        tinjauanCatatan: (v) => undefinable_2.default(v, type_4.default),
        prosedur: (v) => undefinable_1.default(v, positive_1.default),
        klausul: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        fungsi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        masalah: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
        objek: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
        kriteria: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        // lampiran file identifier from lampiran api
        lampiran: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
