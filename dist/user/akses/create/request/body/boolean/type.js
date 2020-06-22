"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../kuisioner/boolean/type");
const type_3 = require("../../../../evaluasi/boolean/type");
const type_4 = require("../../../../perbaikan-internal/boolean/type");
const type_5 = require("../../../../perbaikan-qpass/boolean/type");
const type_6 = require("../../../../perbaikan-external/boolean/type");
const type_7 = require("../../../../perbaikan-spi/boolean/type");
const type_8 = require("../../../../perbaikan-smk3l/boolean/type");
const type_9 = require("../../../../surat-tugas/boolean/type");
const type_10 = require("../../../../user/boolean/type");
const type_11 = require("../../../../jabatan/boolean/type");
const type_12 = require("../../../../unit-kerja/boolean/type");
const type_13 = require("../../../../proyek-qpass/boolean/type");
const type_14 = require("../../../../proyek-internal/boolean/type");
const type_15 = require("../../../../proyek-external/boolean/type");
const type_16 = require("../../../../proyek-spi/boolean/type");
const type_17 = require("../../../../proyek-smk3l/boolean/type");
const type_18 = require("../../../../rencana-qpass/boolean/type");
const type_19 = require("../../../../rencana-internal/boolean/type");
const type_20 = require("../../../../rencana-external/boolean/type");
const type_21 = require("../../../../rencana-spi/boolean/type");
const type_22 = require("../../../../rencana-smk3l/boolean/type");
const type_23 = require("../../../../level-usaha/boolean/type");
const type_24 = require("../../../../jenis-usaha/boolean/type");
const type_25 = require("../../../../jenis-unit/boolean/type");
const type_26 = require("../../../../klausul/boolean/type");
const type_27 = require("../../../../prosedur/boolean/type");
const type_28 = require("../../../../level/boolean/type");
const type_29 = require("../../../../audit-program/boolean/type");
const type_30 = require("../../../../fungsi/boolean/type");
const type_31 = require("../../../../jabatan-anggota/boolean/type");
const type_32 = require("../../../../proses-bisnis/boolean/type");
const type_33 = require("../../../../jadwal-rinci-qpass/boolean/type");
const type_34 = require("../../../../jadwal-rinci-internal/boolean/type");
const type_35 = require("../../../../jadwal-rinci-smk3l/boolean/type");
const type_36 = require("../../../../hasil-temuan-qpass/boolean/type");
const type_37 = require("../../../../hasil-temuan-internal/boolean/type");
const type_38 = require("../../../../hasil-temuan-smk3l/boolean/type");
const type_39 = require("../../../../hasil-temuan-kriteria/boolean/type");
const type_40 = require("../../../../hasil-temuan-level/boolean/type");
const type_41 = require("../../../../ruangan/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        ruangan: (v) => array_of_1.default(v, type_41.default),
        kuisioner: (v) => array_of_1.default(v, type_2.default),
        evaluasi: (v) => array_of_1.default(v, type_3.default),
        perbaikanInternal: (v) => array_of_1.default(v, type_4.default),
        perbaikanQpass: (v) => array_of_1.default(v, type_5.default),
        perbaikanExternal: (v) => array_of_1.default(v, type_6.default),
        perbaikanSpi: (v) => array_of_1.default(v, type_7.default),
        perbaikanSmk3l: (v) => array_of_1.default(v, type_8.default),
        suratTugas: (v) => array_of_1.default(v, type_9.default),
        user: (v) => array_of_1.default(v, type_10.default),
        jabatan: (v) => array_of_1.default(v, type_11.default),
        unitKerja: (v) => array_of_1.default(v, type_12.default),
        proyekQpass: (v) => array_of_1.default(v, type_13.default),
        proyekInternal: (v) => array_of_1.default(v, type_14.default),
        proyekExternal: (v) => array_of_1.default(v, type_15.default),
        proyekSpi: (v) => array_of_1.default(v, type_16.default),
        proyekSmk3l: (v) => array_of_1.default(v, type_17.default),
        rencanaQpass: (v) => array_of_1.default(v, type_18.default),
        rencanaInternal: (v) => array_of_1.default(v, type_19.default),
        rencanaExternal: (v) => array_of_1.default(v, type_20.default),
        rencanaSpi: (v) => array_of_1.default(v, type_21.default),
        rencanaSmk3l: (v) => array_of_1.default(v, type_22.default),
        levelUsaha: (v) => array_of_1.default(v, type_23.default),
        jenisUsaha: (v) => array_of_1.default(v, type_24.default),
        jenisUnit: (v) => array_of_1.default(v, type_25.default),
        klausul: (v) => array_of_1.default(v, type_26.default),
        prosedur: (v) => array_of_1.default(v, type_27.default),
        level: (v) => array_of_1.default(v, type_28.default),
        auditProgram: (v) => array_of_1.default(v, type_29.default),
        fungsi: (v) => array_of_1.default(v, type_30.default),
        jabatanAnggota: (v) => array_of_1.default(v, type_31.default),
        prosesBisnis: (v) => array_of_1.default(v, type_32.default),
        jadwalRinciQpass: (v) => array_of_1.default(v, type_33.default),
        jadwalRinciInternal: (v) => array_of_1.default(v, type_34.default),
        jadwalRinciSmk3l: (v) => array_of_1.default(v, type_35.default),
        hasilTemuanQpass: (v) => array_of_1.default(v, type_36.default),
        hasilTemuanInternal: (v) => array_of_1.default(v, type_37.default),
        hasilTemuanSmk3l: (v) => array_of_1.default(v, type_38.default),
        hasilTemuanKriteria: (v) => array_of_1.default(v, type_39.default),
        hasilTemuanLevel: (v) => array_of_1.default(v, type_40.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
