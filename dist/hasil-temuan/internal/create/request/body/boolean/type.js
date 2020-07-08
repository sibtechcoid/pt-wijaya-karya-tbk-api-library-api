"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_2 = require("@dikac/t-string/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const positive_1 = require("@dikac/t-number/boolean/positive");
const tinjauan_1 = require("../../../../tinjauan/tinjauan");
const type_3 = require("@dikac/t-enum/boolean/type");
const type_4 = require("@dikac/t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        jadwalRinci: positive_1.default,
        prosesBisnis: positive_1.default,
        tinjauan: (v) => type_3.default(v, tinjauan_1.default),
        tinjauanCatatan: type_4.default,
        // tinjauan : (v) => Undefinable(v,(v) : v is Tinjauan => TypeEnum(v, Tinjauan)),
        // tinjauanCatatan : (v) => Undefinable(v, StringType),
        prosedur: positive_1.default,
        klausul: (v) => array_of_1.default(v, positive_1.default),
        fungsi: (v) => array_of_1.default(v, positive_1.default),
        masalah: (v) => array_of_1.default(v, type_2.default),
        objek: (v) => array_of_1.default(v, type_2.default),
        kriteria: (v) => array_of_1.default(v, positive_1.default),
        // lampiran file identifier from lampiran api
        lampiran: (v) => array_of_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
