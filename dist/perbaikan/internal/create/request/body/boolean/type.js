"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
const positive_1 = require("@dikac/t-number/boolean/positive");
const tinjauan_1 = require("../../../../tinjauan/tinjauan");
const keputusan_1 = require("../../../../../keputusan/keputusan");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const type_4 = require("@dikac/t-enum/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        hasilTemuan: positive_1.default,
        /**
         * perintah
         */
        faktor: type_2.default,
        analisis: type_2.default,
        tinjauan: (v) => type_4.default(v, tinjauan_1.default),
        tinjauanCatatan: type_2.default,
        perbaikan: compatible_1.default,
        closing: (v) => array_of_1.default(v, type_2.default),
        pic: positive_1.default,
        prosesBisnis: positive_1.default,
        /**
         * PTKA
         */
        prosedur: positive_1.default,
        ptka: type_2.default,
        konsekuensi: type_2.default,
        referensi: type_2.default,
        keputusan: (v) => type_4.default(v, keputusan_1.default),
        selesai: compatible_1.default,
        /**
         * remark
         */
        ditutup: type_3.default,
        catatan: type_2.default,
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
