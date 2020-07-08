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
        hasilTemuan: (v) => undefinable_1.default(v, type_1.default),
        faktor: (v) => undefinable_1.default(v, type_1.default),
        analisis: (v) => undefinable_1.default(v, type_1.default),
        perbaikan: (v) => undefinable_1.default(v, type_1.default),
        closing: (v) => undefinable_1.default(v, type_1.default),
        pic: (v) => undefinable_1.default(v, type_1.default),
        prosedur: (v) => undefinable_1.default(v, type_1.default),
        prosesBisnis: (v) => undefinable_1.default(v, type_1.default),
        ptka: (v) => undefinable_1.default(v, type_1.default),
        konsekuensi: (v) => undefinable_1.default(v, type_1.default),
        referensi: (v) => undefinable_1.default(v, type_1.default),
        keputusan: (v) => undefinable_1.default(v, type_1.default),
        selesai: (v) => undefinable_1.default(v, type_1.default),
        ditutup: (v) => undefinable_1.default(v, type_1.default),
        catatan: (v) => undefinable_1.default(v, type_1.default),
        rencanaPerbaikan: (v) => undefinable_1.default(v, type_1.default),
        noProsedur: (v) => undefinable_1.default(v, type_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
