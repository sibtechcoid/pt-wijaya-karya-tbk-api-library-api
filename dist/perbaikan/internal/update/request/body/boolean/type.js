"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const type_1 = require("../../../../../../id/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-enum/boolean/type");
const keputusan_1 = require("../../../../../keputusan/keputusan");
const type_4 = require("@dikac/t-boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: (v) => undefinable_1.default(v, positive_1.default),
        hasilTemuan: positive_1.default,
        /**
         * perintah
         */
        faktor: (v) => undefinable_1.default(v, type_2.default),
        analisis: (v) => undefinable_1.default(v, type_2.default),
        rencanaPerbaikan: (v) => undefinable_1.default(v, type_2.default),
        perbaikan: (v) => undefinable_1.default(v, compatible_1.default),
        closing: (v) => array_of_1.default(v, type_2.default),
        pic: (v) => undefinable_1.default(v, positive_1.default),
        prosesBisnis: (v) => undefinable_1.default(v, positive_1.default),
        /**
         * PTKA
         */
        prosedur: (v) => undefinable_1.default(v, positive_1.default),
        ptka: (v) => undefinable_1.default(v, type_2.default),
        konsekuensi: (v) => undefinable_1.default(v, type_2.default),
        referensi: (v) => undefinable_1.default(v, type_2.default),
        keputusan: (v) => undefinable_1.default(v, (v) => type_3.default(v, keputusan_1.default)),
        selesai: (v) => undefinable_1.default(v, compatible_1.default),
        /**
         * remark
         */
        ditutup: type_4.default,
        catatan: type_2.default,
        /**
         * additional
         */
        noProsedur: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
