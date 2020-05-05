"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_1 = require("@dikac/t-string/boolean/type");
const type_2 = require("@dikac/t-enum/boolean/type");
const tinjauan_1 = require("../../../../tinjauan/tinjauan");
const type_3 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    let update = {
        id: (v) => undefinable_1.default(v, positive_1.default),
        audit: (v) => undefinable_1.default(v, positive_1.default),
        klausul: (v) => undefinable_1.default(v, type_1.default),
        auditor: (v) => undefinable_1.default(v, type_1.default),
        deskripsi: (v) => undefinable_1.default(v, type_1.default),
        deadline: (v) => undefinable_1.default(v, type_1.default),
        penyebab: (v) => undefinable_1.default(v, type_1.default),
        koreksi: (v) => undefinable_1.default(v, type_1.default),
        unitKerja: (v) => undefinable_1.default(v, type_1.default),
        kategori: (v) => undefinable_1.default(v, (v) => type_2.default(v, tinjauan_1.default)),
        bukti: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_1.default)),
        kontak: (v) => undefinable_1.default(v, type_1.default),
        ptka: (v) => undefinable_1.default(v, type_1.default),
        fungsi: (v) => undefinable_1.default(v, type_1.default),
        penemu: (v) => undefinable_1.default(v, type_1.default),
        fungsiBagian: (v) => undefinable_1.default(v, type_1.default),
        biro: (v) => undefinable_1.default(v, type_1.default),
        konsekuensi: (v) => undefinable_1.default(v, type_1.default),
        dibuat: (v) => undefinable_1.default(v, compatible_1.default),
        tanggal: (v) => undefinable_1.default(v, compatible_1.default),
    };
    return structure_1.default(value, update);
}
exports.default = Type;
