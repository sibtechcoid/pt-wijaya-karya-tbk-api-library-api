import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";

import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import KuisionerType from "../../../../kuisioner/boolean/type";
import EvaluasiType from "../../../../evaluasi/boolean/type";
import PerbaikanInternalType from "../../../../perbaikan-internal/boolean/type";
import PerbaikanQpassType from "../../../../perbaikan-qpass/boolean/type";
import PerbaikanExternalType from "../../../../perbaikan-external/boolean/type";
import PerbaikanSpiType from "../../../../perbaikan-spi/boolean/type";
import PerbaikanSmk3lType from "../../../../perbaikan-smk3l/boolean/type";
import SuratTugasType from "../../../../surat-tugas/boolean/type";
import UserAksesType from "../../../../user/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import UnitKerjaAksesType from "../../../../unit-kerja/boolean/type";
import ProjectQpassType from "../../../../proyek-qpass/boolean/type";
import ProjectInternalType from "../../../../proyek-internal/boolean/type";
import ProjectExternalType from "../../../../proyek-external/boolean/type";
import ProjectSpiType from "../../../../proyek-spi/boolean/type";
import ProjectSmk3lType from "../../../../proyek-smk3l/boolean/type";
import RencanaQpassType from "../../../../rencana-qpass/boolean/type";
import RencanaInternalType from "../../../../rencana-internal/boolean/type";
import RencanaExternalType from "../../../../rencana-external/boolean/type";
import RencanaSpiType from "../../../../rencana-spi/boolean/type";
import RencanaSmk3lType from "../../../../rencana-smk3l/boolean/type";
import LevelUsahaType from "../../../../level-usaha/boolean/type";
import JenisUsahaType from "../../../../jenis-usaha/boolean/type";
import JenisUnitType from "../../../../jenis-unit/boolean/type";
import KlausulType from "../../../../klausul/boolean/type";
import ProsedurType from "../../../../prosedur/boolean/type";
import LevelType from "../../../../level/boolean/type";
import AuditProgramType from "../../../../audit-program/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import JabatanAnggotaType from "../../../../jabatan-anggota/boolean/type";
import ProsesBisnisType from "../../../../proses-bisnis/boolean/type";
import JadwalRinciQpassType from "../../../../jadwal-rinci-qpass/boolean/type";
import JadwalRinciInternalType from "../../../../jadwal-rinci-internal/boolean/type";
import JadwalRinciSmk3lType from "../../../../jadwal-rinci-smk3l/boolean/type";
import HasilTemuanQpassType from "../../../../hasil-temuan-qpass/boolean/type";
import HasilTemuanInternalType from "../../../../hasil-temuan-internal/boolean/type";
import HasilTemuanSmk3lType from "../../../../hasil-temuan-smk3l/boolean/type";
import HasilTemuanKriteriaType from "../../../../hasil-temuan-kriteria/boolean/type";
import HasilTemuanLevelType from "../../../../hasil-temuan-level/boolean/type";



export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }


    let sort : Validator<Required<Body>> = {
        kuisioner           : (v) => ArrayOf(v, KuisionerType),
        evaluasi            : (v) => ArrayOf(v, EvaluasiType),
        perbaikanInternal   : (v) => ArrayOf(v, PerbaikanInternalType),
        perbaikanQpass      : (v) => ArrayOf(v, PerbaikanQpassType),
        perbaikanExternal   : (v) => ArrayOf(v, PerbaikanExternalType),
        perbaikanSpi        : (v) => ArrayOf(v, PerbaikanSpiType),
        perbaikanSmk3l      : (v) => ArrayOf(v, PerbaikanSmk3lType),
        suratTugas          : (v) => ArrayOf(v, SuratTugasType),
        user                : (v) => ArrayOf(v, UserAksesType),
        jabatan             : (v) => ArrayOf(v, JabatanType),
        unitKerja           : (v) => ArrayOf(v, UnitKerjaAksesType),
        proyekQpass         : (v) => ArrayOf(v, ProjectQpassType),
        proyekInternal      : (v) => ArrayOf(v, ProjectInternalType),
        proyekExternal      : (v) => ArrayOf(v, ProjectExternalType),
        proyekSpi           : (v) => ArrayOf(v, ProjectSpiType),
        proyekSmk3l         : (v) => ArrayOf(v, ProjectSmk3lType),
        rencanaQpass        : (v) => ArrayOf(v, RencanaQpassType),
        rencanaInternal     : (v) => ArrayOf(v, RencanaInternalType),
        rencanaExternal     : (v) => ArrayOf(v, RencanaExternalType),
        rencanaSpi          : (v) => ArrayOf(v, RencanaSpiType),
        rencanaSmk3l        : (v) => ArrayOf(v, RencanaSmk3lType),
        levelUsaha          : (v) => ArrayOf(v, LevelUsahaType),
        jenisUsaha          : (v) => ArrayOf(v, JenisUsahaType),
        jenisUnit           : (v) => ArrayOf(v, JenisUnitType),
        klausul             : (v) => ArrayOf(v, KlausulType),
        prosedur            : (v) => ArrayOf(v, ProsedurType),
        level               : (v) => ArrayOf(v, LevelType),
        auditProgram        : (v) => ArrayOf(v, AuditProgramType),
        fungsi              : (v) => ArrayOf(v, FungsiType),
        jabatanAnggota      : (v) => ArrayOf(v, JabatanAnggotaType),
        prosesBisnis        : (v) => ArrayOf(v, ProsesBisnisType),
        jadwalRinciQpass    : (v) => ArrayOf(v, JadwalRinciQpassType),
        jadwalRinciInternal : (v) => ArrayOf(v, JadwalRinciInternalType),
        jadwalRinciSmk3l    : (v) => ArrayOf(v, JadwalRinciSmk3lType),
        hasilTemuanQpass    : (v) => ArrayOf(v, HasilTemuanQpassType),
        hasilTemuanInternal : (v) => ArrayOf(v, HasilTemuanInternalType),
        hasilTemuanSmk3l    : (v) => ArrayOf(v, HasilTemuanSmk3lType),
        hasilTemuanKriteria : (v) => ArrayOf(v, HasilTemuanKriteriaType),
        hasilTemuanLevel    : (v) => ArrayOf(v, HasilTemuanLevelType),
    };

    return Structure(value, sort);
}
