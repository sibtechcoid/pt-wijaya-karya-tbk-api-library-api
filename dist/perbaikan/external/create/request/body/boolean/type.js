"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
const positive_1 = require("@dikac/t-number/boolean/positive");
const tinjauan_1 = require("../../../../tinjauan/tinjauan");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const type_4 = require("@dikac/t-enum/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        // id: (v) => Undefinable(v, Positive),
        audit: (v) => undefinable_1.default(v, positive_1.default),
        /**
         * perintah
         */
        klausul: (v) => undefinable_1.default(v, type_2.default),
        auditor: (v) => undefinable_1.default(v, type_2.default),
        deskripsi: (v) => undefinable_1.default(v, type_2.default),
        deadline: (v) => undefinable_1.default(v, type_2.default),
        penyebab: (v) => undefinable_1.default(v, type_2.default),
        koreksi: (v) => undefinable_1.default(v, type_2.default),
        unitKerja: (v) => undefinable_1.default(v, type_2.default),
        kategori: (v) => undefinable_1.default(v, (v) => type_4.default(v, tinjauan_1.default)),
        bukti: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
        /**
         * PTKA
         */
        kontak: (v) => undefinable_1.default(v, type_2.default),
        noPtka: (v) => undefinable_1.default(v, type_2.default),
        fungsi: (v) => undefinable_1.default(v, type_2.default),
        penemu: (v) => undefinable_1.default(v, type_2.default),
        biro: (v) => undefinable_1.default(v, type_2.default),
        konsekuensi: (v) => undefinable_1.default(v, type_2.default),
        dibuat: (v) => undefinable_1.default(v, compatible_1.default),
        tanggal: (v) => undefinable_1.default(v, compatible_1.default),
        //
        // /**
        //  * submitted
        //  */
        // submit : BooleanType,
        ditutup: (v) => undefinable_1.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
