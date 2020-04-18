"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../surat-tugas/boolean/type");
const type_3 = require("../../../../user/boolean/type");
const type_4 = require("../../../../jabatan/boolean/type");
const type_5 = require("../../../../unit-kerja/boolean/type");
const type_6 = require("../../../../proyek-internal/boolean/type");
const type_7 = require("../../../../proyek-qpass/boolean/type");
const type_8 = require("../../../../proyek-external/boolean/type");
const type_9 = require("../../../../proyek-spi/boolean/type");
const type_10 = require("../../../../proyek-smk3l/boolean/type");
const type_11 = require("../../../../rencana-internal/boolean/type");
const type_12 = require("../../../../rencana-qpass/boolean/type");
const type_13 = require("../../../../rencana-external/boolean/type");
const type_14 = require("../../../../rencana-spi/boolean/type");
const type_15 = require("../../../../rencana-smk3l/boolean/type");
const type_16 = require("../../../../level-usaha/boolean/type");
const type_17 = require("../../../../jenis-usaha/boolean/type");
const type_18 = require("../../../../jenis-unit/boolean/type");
const type_19 = require("../../../../klausul/boolean/type");
const type_20 = require("../../../../prosedur/boolean/type");
const type_21 = require("../../../../level/boolean/type");
const type_22 = require("../../../../audit-program/boolean/type");
const type_23 = require("../../../../fungsi/boolean/type");
const type_24 = require("../../../../jabatan-anggota/boolean/type");
const type_25 = require("../../../../proses-bisnis/boolean/type");
const type_26 = require("../../../../jadwal-rinci-qpass/boolean/type");
const type_27 = require("../../../../jadwal-rinci-internal/boolean/type");
const type_28 = require("../../../../jadwal-rinci-smk3l/boolean/type");
const type_29 = require("../../../../hasil-temuan-qpass/boolean/type");
const type_30 = require("../../../../hasil-temuan-internal/boolean/type");
const type_31 = require("../../../../hasil-temuan-smk3l/boolean/type");
const type_32 = require("../../../../hasil-temuan-kriteria/boolean/type");
const type_33 = require("../../../../hasil-temuan-level/boolean/type");
const type_34 = require("../../../../perbaikan-spi/boolean/type");
const type_35 = require("../../../../perbaikan-external/boolean/type");
const type_36 = require("../../../../perbaikan-smk3l/boolean/type");
const type_37 = require("../../../../perbaikan-internal/boolean/type");
const type_38 = require("../../../../perbaikan-qpass/boolean/type");
const type_39 = require("../../../../kuisioner/boolean/type");
const type_40 = require("../../../../evaluasi/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: positive_1.default,
        kuisioner: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_39.default)),
        evaluasi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_40.default)),
        perbaikanInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_37.default)),
        perbaikanQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_38.default)),
        perbaikanExternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_35.default)),
        perbaikanSpi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_34.default)),
        perbaikanSmk3l: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_36.default)),
        suratTugas: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
        user: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_3.default)),
        jabatan: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_4.default)),
        unitKerja: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_5.default)),
        proyekQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_7.default)),
        proyekInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_6.default)),
        proyekExternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_8.default)),
        proyekSpi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_9.default)),
        proyekSmk3l: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_10.default)),
        rencanaQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_12.default)),
        rencanaInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_11.default)),
        rencanaExternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_13.default)),
        rencanaSpi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_14.default)),
        rencanaSmk3l: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_15.default)),
        levelUsaha: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_16.default)),
        jenisUsaha: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_17.default)),
        jenisUnit: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_18.default)),
        klausul: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_19.default)),
        prosedur: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_20.default)),
        level: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_21.default)),
        auditProgram: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_22.default)),
        fungsi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_23.default)),
        jabatanAnggota: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_24.default)),
        prosesBisnis: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_25.default)),
        jadwalRinciQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_26.default)),
        jadwalRinciInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_27.default)),
        jadwalRinciSmk3l: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_28.default)),
        hasilTemuanQpass: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_29.default)),
        hasilTemuanInternal: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_30.default)),
        hasilTemuanSmk3l: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_31.default)),
        hasilTemuanKriteria: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_32.default)),
        hasilTemuanLevel: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, type_33.default)),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
