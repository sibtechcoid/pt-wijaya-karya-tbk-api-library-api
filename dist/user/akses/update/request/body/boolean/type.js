"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../surat-tugas/boolean/type");
const type_3 = require("../../../../user/boolean/type");
const type_4 = require("../../../../jabatan/boolean/type");
const type_5 = require("../../../../unit-kerja/boolean/type");
const type_6 = require("../../../../proyek/boolean/type");
const type_7 = require("../../../../rencana/boolean/type");
const type_8 = require("../../../../level-usaha/boolean/type");
const type_9 = require("../../../../jenis-usaha/boolean/type");
const type_10 = require("../../../../jenis-unit/boolean/type");
const type_11 = require("../../../../klausul/boolean/type");
const type_12 = require("../../../../prosedur/boolean/type");
const type_13 = require("../../../../jadwal-rinci-level/boolean/type");
const type_14 = require("../../../../audit-program/boolean/type");
const type_15 = require("../../../../fungsi/boolean/type");
const type_16 = require("../../../../jabatan-anggota/boolean/type");
const type_17 = require("../../../../proses-bisnis/boolean/type");
const type_18 = require("../../../../jadwal-rinci-qpass/boolean/type");
const type_19 = require("../../../../jadwal-rinci-internal/boolean/type");
const type_20 = require("../../../../hasil-temuan-qpass/boolean/type");
const type_21 = require("../../../../hasil-temuan-internal/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: finite_1.default,
        suratTugas: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
        user: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_3.default)),
        jabatan: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_4.default)),
        unitKerja: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_5.default)),
        proyek: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_6.default)),
        rencana: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_7.default)),
        levelUsaha: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_8.default)),
        jenisUsaha: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_9.default)),
        jenisUnit: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_10.default)),
        klausul: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_11.default)),
        prosedur: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_12.default)),
        jadwalRinciLevel: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_13.default)),
        auditProgram: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_14.default)),
        fungsi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_15.default)),
        jabatanAnggota: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_16.default)),
        prosesBisnis: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_17.default)),
        jadwalRinciQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_18.default)),
        jadwalRinciInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_19.default)),
        hasilTemuanQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_20.default)),
        hasilTemuanInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_21.default)),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map