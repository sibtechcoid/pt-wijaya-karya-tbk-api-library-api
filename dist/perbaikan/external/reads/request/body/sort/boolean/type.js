"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_1 = require("../../../../../../../sort/mode/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_2 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    let sort = {
        created: (v) => undefinable_1.default(v, type_1.default),
        id: (v) => undefinable_1.default(v, type_1.default),
        updated: (v) => undefinable_1.default(v, type_1.default),
        audit: (v) => undefinable_1.default(v, type_1.default),
        auditor: (v) => undefinable_1.default(v, type_1.default),
        klausul: (v) => undefinable_1.default(v, type_1.default),
        kategori: (v) => undefinable_1.default(v, type_1.default),
        deskripsi: (v) => undefinable_1.default(v, type_1.default),
        penyebab: (v) => undefinable_1.default(v, type_1.default),
        deadline: (v) => undefinable_1.default(v, type_1.default),
        bukti: (v) => undefinable_1.default(v, type_1.default),
        koreksi: (v) => undefinable_1.default(v, type_1.default),
        ptka: (v) => undefinable_1.default(v, type_1.default),
        konsekuensi: (v) => undefinable_1.default(v, type_1.default),
        kontak: (v) => undefinable_1.default(v, type_1.default),
        unitKerja: (v) => undefinable_1.default(v, type_1.default),
        fungsi: (v) => undefinable_1.default(v, type_1.default),
        dibuat: (v) => undefinable_1.default(v, type_1.default),
        penemu: (v) => undefinable_1.default(v, type_1.default),
        biro: (v) => undefinable_1.default(v, type_1.default),
        tanggal: (v) => undefinable_1.default(v, type_1.default),
        status: (v) => undefinable_1.default(v, type_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
