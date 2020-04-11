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
const type_14 = require("../../../../hasil-temuan-qpass/boolean/type");
const type_15 = require("../../../../hasil-temuan-internal/boolean/type");
const type_16 = require("../../../../hasil-temuan-kriteria/boolean/type");
const type_17 = require("../../../../hasil-temuan-level/boolean/type");
const type_18 = require("../../../../jadwal-rinci-qpass/boolean/type");
const type_19 = require("../../../../jadwal-rinci-internal/boolean/type");
const type_20 = require("../../../../jabatan-anggota/boolean/type");
const type_21 = require("../../../../fungsi/boolean/type");
const type_22 = require("../../../../surat-tugas/boolean/type");
const type_23 = require("../../../../proses-bisnis/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_24 = require("../../../../kuisioner/boolean/type");
const type_25 = require("../../../../evaluasi/boolean/type");
const type_26 = require("../../../../perbaikan-internal/boolean/type");
const type_27 = require("../../../../perbaikan-qpass/boolean/type");
const type_28 = require("../../../../perbaikan-external/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        kuisioner: (v) => array_of_1.default(v, type_24.default),
        evaluasi: (v) => array_of_1.default(v, type_25.default),
        perbaikanInternal: (v) => array_of_1.default(v, type_26.default),
        perbaikanQpass: (v) => array_of_1.default(v, type_27.default),
        perbaikanExternal: (v) => array_of_1.default(v, type_28.default),
        suratTugas: (v) => array_of_1.default(v, type_22.default),
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
        fungsi: (v) => array_of_1.default(v, type_21.default),
        jabatanAnggota: (v) => array_of_1.default(v, type_20.default),
        prosesBisnis: (v) => array_of_1.default(v, type_23.default),
        jadwalRinciQpass: (v) => array_of_1.default(v, type_18.default),
        jadwalRinciInternal: (v) => array_of_1.default(v, type_19.default),
        hasilTemuanQpass: (v) => array_of_1.default(v, type_14.default),
        hasilTemuanInternal: (v) => array_of_1.default(v, type_15.default),
        hasilTemuanLevel: (v) => array_of_1.default(v, type_17.default),
        hasilTemuanKriteria: (v) => array_of_1.default(v, type_16.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
