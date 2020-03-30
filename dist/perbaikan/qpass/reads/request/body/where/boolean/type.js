"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_3 = require("@dikac/t-string/boolean/type");
const type_4 = require("@dikac/t-enum/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const keputusan_1 = require("../../../../../../keputusan/keputusan");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        // mulai: (v) => Undefinable(v, Compatible),
        // audit: (v) => Undefinable(v, Positive),
        // selesai: (v) => Undefinable(v, Compatible),
        // deactivate : (v) => Undefinable(v, BooleanType)
        // id: (v) => Undefinable(v, Positive),
        hasilTemuan: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, positive_1.default)),
        /**
         * perintah
         */
        faktor: (v) => undefinable_1.default(v, type_3.default),
        prosesBisnis: (v) => undefinable_1.default(v, type_3.default),
        analisis: (v) => undefinable_1.default(v, type_3.default),
        tindakLanjut: (v) => undefinable_1.default(v, type_3.default),
        //tinjauan : (v) => Undefinable(v,(v) : v is Tinjauan => TypeEnum(v, Tinjauan)),
        //tinjauanCatatan : (v) => Undefinable(v, StringType),
        perbaikan: (v) => undefinable_1.default(v, compatible_1.default),
        closing: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_3.default)),
        pic: (v) => undefinable_1.default(v, positive_1.default),
        /**
         * PTKA
         */
        // prsedur : (v) => Undefinable(v, Positive),
        // noPtka : (v) => Undefinable(v, StringType),
        konsekuensi: (v) => undefinable_1.default(v, type_3.default),
        ptka: (v) => undefinable_1.default(v, type_3.default),
        prosedur: (v) => undefinable_1.default(v, type_3.default),
        // referensi : (v) => Undefinable(v, StringType),
        keputusan: (v) => undefinable_1.default(v, (v) => type_4.default(v, keputusan_1.default)),
        selesai: (v) => undefinable_1.default(v, compatible_1.default),
        /**
         * remark
         */
        ditutup: (v) => undefinable_1.default(v, type_2.default),
        catatan: (v) => undefinable_1.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
