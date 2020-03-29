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
const keputusan_1 = require("../../../../../keputusan/keputusan");
const type_3 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    let update = {
        // id : Positive,
        // audit : (v) => Undefinable(v, Positive),
        // selesai : (v) => Undefinable(v, TypeDateCompatible),
        // mulai : (v) => Undefinable(v, TypeDateCompatible),
        // fungsi :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        // prosedur :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        // prosesBisnis : (v) => Undefinable(v, Positive),
        // klausul :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        // auditor :  (v) => Undefinable(v, (v) : v is number[] => ArrayOf(v, Positive)),
        id: (v) => undefinable_1.default(v, positive_1.default),
        hasilTemuan: (v) => undefinable_1.default(v, positive_1.default),
        /**
         * perintah
         */
        faktor: (v) => undefinable_1.default(v, type_1.default),
        analisis: (v) => undefinable_1.default(v, type_1.default),
        tinjauan: (v) => undefinable_1.default(v, (v) => type_2.default(v, tinjauan_1.default)),
        tinjauanCatatan: (v) => undefinable_1.default(v, type_1.default),
        perbaikan: (v) => undefinable_1.default(v, compatible_1.default),
        closing: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_1.default)),
        pic: (v) => undefinable_1.default(v, positive_1.default),
        /**
         * PTKA
         */
        prsedur: (v) => undefinable_1.default(v, positive_1.default),
        noPtka: (v) => undefinable_1.default(v, type_1.default),
        konsekuensi: (v) => undefinable_1.default(v, type_1.default),
        referensi: (v) => undefinable_1.default(v, type_1.default),
        keputusan: (v) => undefinable_1.default(v, (v) => type_2.default(v, keputusan_1.default)),
        selesai: (v) => undefinable_1.default(v, compatible_1.default),
    };
    return structure_1.default(value, update);
}
exports.default = Type;
