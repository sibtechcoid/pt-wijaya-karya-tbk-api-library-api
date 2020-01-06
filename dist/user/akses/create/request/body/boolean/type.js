"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../proyek/boolean/type");
const type_3 = require("../../../../user/boolean/type");
const type_4 = require("../../../../unit-kerja/boolean/type");
const type_5 = require("../../../../rencana/boolean/type");
const type_6 = require("../../../../level-usaha/boolean/type");
const type_7 = require("../../../../jenis-usaha/boolean/type");
const type_8 = require("../../../../jenis-unit/boolean/type");
const type_9 = require("../../../../audit-program/boolean/type");
const type_10 = require("../../../../klausul/boolean/type");
const type_11 = require("../../../../prosedur/boolean/type");
const type_12 = require("../../../../level/boolean/type");
const type_13 = require("../../../../jabatan/boolean/type");
const type_14 = require("../../../../jabatan-anggota/boolean/type");
const type_15 = require("../../../../fungsi/boolean/type");
const type_16 = require("../../../../proses-bisnis/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const structure_1 = require("@dikac/t-object/boolean/structure");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        user: (v) => array_of_1.default(v, type_3.default),
        jabatan: (v) => array_of_1.default(v, type_13.default),
        unitKerja: (v) => array_of_1.default(v, type_4.default),
        proyek: (v) => array_of_1.default(v, type_2.default),
        rencana: (v) => array_of_1.default(v, type_5.default),
        levelUsaha: (v) => array_of_1.default(v, type_6.default),
        jenisUsaha: (v) => array_of_1.default(v, type_7.default),
        jenisUnit: (v) => array_of_1.default(v, type_8.default),
        klausul: (v) => array_of_1.default(v, type_10.default),
        prosedur: (v) => array_of_1.default(v, type_11.default),
        level: (v) => array_of_1.default(v, type_12.default),
        auditProgram: (v) => array_of_1.default(v, type_9.default),
        fungsi: (v) => array_of_1.default(v, type_15.default),
        jabatanAnggota: (v) => array_of_1.default(v, type_14.default),
        prosesBisnis: (v) => array_of_1.default(v, type_16.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map