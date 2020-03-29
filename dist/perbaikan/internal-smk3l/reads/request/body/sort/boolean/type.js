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
        // deactivate  : (v) => Undefinable(v, ModeType),
        created: (v) => undefinable_1.default(v, type_1.default),
        id: (v) => undefinable_1.default(v, type_1.default),
        updated: (v) => undefinable_1.default(v, type_1.default),
        //  selesai     : (v) => Undefinable(v, ModeType),
        //  audit       : (v) => Undefinable(v, ModeType),
        //  mulai       : (v) => Undefinable(v, ModeType),
        //  pelaksanaan : (v) => Undefinable(v, ModeType),
        //  diselesaikan: (v) => Undefinable(v, ModeType),
        hasilTemuan: (v) => undefinable_1.default(v, type_1.default),
        faktor: (v) => undefinable_1.default(v, type_1.default),
        analisis: (v) => undefinable_1.default(v, type_1.default),
        tinjauan: (v) => undefinable_1.default(v, type_1.default),
        tinjauanCatatan: (v) => undefinable_1.default(v, type_1.default),
        perbaikan: (v) => undefinable_1.default(v, type_1.default),
        closing: (v) => undefinable_1.default(v, type_1.default),
        pic: (v) => undefinable_1.default(v, type_1.default),
        prsedur: (v) => undefinable_1.default(v, type_1.default),
        noPtka: (v) => undefinable_1.default(v, type_1.default),
        konsekuensi: (v) => undefinable_1.default(v, type_1.default),
        referensi: (v) => undefinable_1.default(v, type_1.default),
        keputusan: (v) => undefinable_1.default(v, type_1.default),
        selesai: (v) => undefinable_1.default(v, type_1.default),
        ditutup: (v) => undefinable_1.default(v, type_1.default),
        catatan: (v) => undefinable_1.default(v, type_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
