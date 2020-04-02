"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_3 = require("@dikac/t-string/boolean/type");
const tinjauan_1 = require("../../../../../tinjauan/tinjauan");
const type_4 = require("@dikac/t-enum/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        audit: (v) => undefinable_1.default(v, positive_1.default),
        /**
         * perintah
         */
        kategori: (v) => undefinable_1.default(v, (v) => type_4.default(v, tinjauan_1.default)),
        klausul: (v) => undefinable_1.default(v, type_3.default),
        auditor: (v) => undefinable_1.default(v, type_3.default),
        deskripsi: (v) => undefinable_1.default(v, type_3.default),
        deadline: (v) => undefinable_1.default(v, type_3.default),
        penyebab: (v) => undefinable_1.default(v, type_3.default),
        koreksi: (v) => undefinable_1.default(v, type_3.default),
        unitKerja: (v) => undefinable_1.default(v, type_3.default),
        bukti: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_3.default)),
        /**
         * PTKA
         */
        kontak: (v) => undefinable_1.default(v, type_3.default),
        noPtka: (v) => undefinable_1.default(v, type_3.default),
        fungsi: (v) => undefinable_1.default(v, type_3.default),
        penemu: (v) => undefinable_1.default(v, type_3.default),
        biro: (v) => undefinable_1.default(v, type_3.default),
        konsekuensi: (v) => undefinable_1.default(v, type_3.default),
        dibuat: (v) => undefinable_1.default(v, compatible_1.default),
        tanggal: (v) => undefinable_1.default(v, compatible_1.default),
        /**
         * remark
         */
        // status : (v) => Undefinable(v,(v) : v is Status => TypeEnum(v, Status)),
        //
        // /**
        //  * submitted
        //  */
        ditutup: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
