import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import SuratTugasType from "../../../../surat-tugas/boolean/type";
import UserAksesType from "../../../../user/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import UnitKerjaAksesType from "../../../../unit-kerja/boolean/type";

import ProjectInternalType from "../../../../proyek-internal/boolean/type";
import ProjectQpassType from "../../../../proyek-qpass/boolean/type";
import ProjectExternalType from "../../../../proyek-external/boolean/type";
import ProjectSpiType from "../../../../proyek-spi/boolean/type";
import ProjectSmk3lType from "../../../../proyek-smk3l/boolean/type";

import RencanaInternalType from "../../../../rencana-internal/boolean/type";
import RencanaQpassType from "../../../../rencana-qpass/boolean/type";
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

import PerbaikanSpiType from "../../../../perbaikan-spi/boolean/type";
import PerbaikanExternalType from "../../../../perbaikan-external/boolean/type";
import PerbaikanSmk3lType from "../../../../perbaikan-smk3l/boolean/type";
import PerbaikanInternalType from "../../../../perbaikan-internal/boolean/type";
import PerbaikanQpassType from "../../../../perbaikan-qpass/boolean/type";
import KuisionerType from "../../../../kuisioner/boolean/type";
import EvaluasiType from "../../../../evaluasi/boolean/type";
import SuratTugasAccess from "../../../../surat-tugas/akses";
import UserAksesAccess from "../../../../user/akses";
import JabatanAccess from "../../../../jabatan/akses";
import UnitKerjaAksesAccess from "../../../../unit-kerja/akses";

import ProjectInternalAccess from "../../../../proyek-internal/akses";
import ProjectExternalAccess from "../../../../proyek-external/akses";
import ProjectSpiAccess from "../../../../proyek-spi/akses";
import ProjectSmk3lAccess from "../../../../proyek-smk3l/akses";
import ProjectQpassAccess from "../../../../proyek-qpass/akses";

import RencanaInternalAccess from "../../../../rencana-internal/akses";
import RencanaExternalAccess from "../../../../rencana-external/akses";
import RencanaSpiAccess from "../../../../rencana-spi/akses";
import RencanaSmk3lAccess from "../../../../rencana-smk3l/akses";
import RencanaQpassAccess from "../../../../rencana-qpass/akses";

import LevelUsahaAccess from "../../../../level-usaha/akses";
import JenisUsahaAccess from "../../../../jenis-usaha/akses";
import JenisUnitAccess from "../../../../jenis-unit/akses";
import KlausulAccess from "../../../../klausul/akses";
import ProsedurAccess from "../../../../prosedur/akses";
import LevelAccess from "../../../../level/akses";
import AuditProgramAccess from "../../../../audit-program/akses";
import FungsiAccess from "../../../../fungsi/akses";
import JabatanAnggotaAccess from "../../../../jabatan-anggota/akses";
import ProsesBisnisAccess from "../../../../proses-bisnis/akses";

import JadwalRinciQpassAccess from "../../../../jadwal-rinci-qpass/akses";
import JadwalRinciInternalAccess from "../../../../jadwal-rinci-internal/akses";
import JadwalRinciSmk3lAccess from "../../../../jadwal-rinci-smk3l/akses";

import HasilTemuanQpassAccess from "../../../../hasil-temuan-qpass/akses";
import HasilTemuanInternalAccess from "../../../../hasil-temuan-internal/akses";
import HasilTemuanSmk3lAccess from "../../../../hasil-temuan-smk3l/akses";

import HasilTemuanKriteriaAccess from "../../../../hasil-temuan-kriteria/akses";
import HasilTemuanLevelAccess from "../../../../hasil-temuan-level/akses";

import PerbaikanInternalAccess from "../../../../perbaikan-internal/akses";
import PerbaikanQpassAccess from "../../../../perbaikan-qpass/akses";
import PerbaikanExternalAccess from "../../../../perbaikan-external/akses";
import PerbaikanSpiAccess from "../../../../perbaikan-spi/akses";
import PerbaikanSmk3lAccess from "../../../../perbaikan-smk3l/akses";

import KuisionerlAccess from "../../../../kuisioner/akses";
import EvaluasiAccess from "../../../../evaluasi/akses";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        id : Positive,
        kuisioner             : (v)=>Undefinable(v,(v) : v is KuisionerlAccess[]           => ArrayOf(v, KuisionerType)),
        evaluasi              : (v)=>Undefinable(v,(v) : v is EvaluasiAccess[]             => ArrayOf(v, EvaluasiType)),

        perbaikanInternal     : (v)=>Undefinable(v,(v) : v is PerbaikanInternalAccess[]    => ArrayOf(v, PerbaikanInternalType)),
        perbaikanQpass        : (v)=>Undefinable(v,(v) : v is PerbaikanQpassAccess[]       => ArrayOf(v, PerbaikanQpassType)),
        perbaikanExternal     : (v)=>Undefinable(v,(v) : v is PerbaikanExternalAccess[]    => ArrayOf(v, PerbaikanExternalType)),
        perbaikanSpi     : (v)=>Undefinable(v,(v) : v is PerbaikanSpiAccess[]    => ArrayOf(v, PerbaikanSpiType)),
        perbaikanSmk3l     : (v)=>Undefinable(v,(v) : v is PerbaikanSmk3lAccess[]    => ArrayOf(v, PerbaikanSmk3lType)),

        suratTugas            : (v)=>Undefinable(v,(v) : v is SuratTugasAccess[]           => ArrayOf(v, SuratTugasType)),
        user                  : (v)=>Undefinable(v,(v) : v is UserAksesAccess[]            => ArrayOf(v, UserAksesType)),
        jabatan               : (v)=>Undefinable(v,(v) : v is JabatanAccess[]              => ArrayOf(v, JabatanType)),
        unitKerja             : (v)=>Undefinable(v,(v) : v is UnitKerjaAksesAccess[]       => ArrayOf(v, UnitKerjaAksesType)),

        proyekQpass                : (v)=>Undefinable(v,(v) : v is ProjectQpassAccess[]         => ArrayOf(v, ProjectQpassType)),
        proyekInternal                : (v)=>Undefinable(v,(v) : v is ProjectInternalAccess[]         => ArrayOf(v, ProjectInternalType)),
        proyekExternal                : (v)=>Undefinable(v,(v) : v is ProjectExternalAccess[]         => ArrayOf(v, ProjectExternalType)),
        proyekSpi                : (v)=>Undefinable(v,(v) : v is ProjectSpiAccess[]         => ArrayOf(v, ProjectSpiType)),
        proyekSmk3l                : (v)=>Undefinable(v,(v) : v is ProjectSmk3lAccess[]         => ArrayOf(v, ProjectSmk3lType)),

        rencanaQpass               : (v)=>Undefinable(v,(v) : v is RencanaQpassAccess[]         => ArrayOf(v, RencanaQpassType)),
        rencanaInternal               : (v)=>Undefinable(v,(v) : v is RencanaInternalAccess[]         => ArrayOf(v, RencanaInternalType)),
        rencanaExternal               : (v)=>Undefinable(v,(v) : v is RencanaExternalAccess[]         => ArrayOf(v, RencanaExternalType)),
        rencanaSpi               : (v)=>Undefinable(v,(v) : v is RencanaSpiAccess[]         => ArrayOf(v, RencanaSpiType)),
        rencanaSmk3l               : (v)=>Undefinable(v,(v) : v is RencanaSmk3lAccess[]         => ArrayOf(v, RencanaSmk3lType)),

        levelUsaha            : (v)=>Undefinable(v,(v) : v is LevelUsahaAccess[]           => ArrayOf(v, LevelUsahaType)),
        jenisUsaha            : (v)=>Undefinable(v,(v) : v is JenisUsahaAccess[]           => ArrayOf(v, JenisUsahaType)),
        jenisUnit             : (v)=>Undefinable(v,(v) : v is JenisUnitAccess[]            => ArrayOf(v, JenisUnitType)),
        klausul               : (v)=>Undefinable(v,(v) : v is KlausulAccess[]              => ArrayOf(v, KlausulType)),
        prosedur              : (v)=>Undefinable(v,(v) : v is ProsedurAccess[]             => ArrayOf(v, ProsedurType)),
        level                 : (v)=>Undefinable(v,(v) : v is LevelAccess[]                => ArrayOf(v, LevelType)),
        auditProgram          : (v)=>Undefinable(v,(v) : v is AuditProgramAccess[]         => ArrayOf(v, AuditProgramType)),
        fungsi                : (v)=>Undefinable(v,(v) : v is FungsiAccess[]               => ArrayOf(v, FungsiType)),
        jabatanAnggota        : (v)=>Undefinable(v,(v) : v is JabatanAnggotaAccess[]       => ArrayOf(v, JabatanAnggotaType)),
        prosesBisnis          : (v)=>Undefinable(v,(v) : v is ProsesBisnisAccess[]         => ArrayOf(v, ProsesBisnisType)),

        jadwalRinciQpass      : (v)=>Undefinable(v,(v) : v is JadwalRinciQpassAccess[]     => ArrayOf(v, JadwalRinciQpassType)),
        jadwalRinciInternal   : (v)=>Undefinable(v, (v) : v is JadwalRinciInternalAccess[] => ArrayOf(v, JadwalRinciInternalType)),
        jadwalRinciSmk3l   : (v)=>Undefinable(v, (v) : v is JadwalRinciSmk3lAccess[] => ArrayOf(v, JadwalRinciSmk3lType)),

        hasilTemuanQpass      : (v)=>Undefinable(v,(v) : v is HasilTemuanQpassAccess[]     => ArrayOf(v, HasilTemuanQpassType)),
        hasilTemuanInternal   : (v)=>Undefinable(v, (v) : v is HasilTemuanInternalAccess[] => ArrayOf(v, HasilTemuanInternalType)),
        hasilTemuanSmk3l   : (v)=>Undefinable(v, (v) : v is HasilTemuanSmk3lAccess[] => ArrayOf(v, HasilTemuanSmk3lType)),

        hasilTemuanKriteria   : (v)=>Undefinable(v,(v) : v is HasilTemuanKriteriaAccess[]  => ArrayOf(v, HasilTemuanKriteriaType)),
        hasilTemuanLevel      : (v)=>Undefinable(v, (v) : v is HasilTemuanLevelAccess[]    => ArrayOf(v, HasilTemuanLevelType)),
    };

    return Structure(value, sort);

}
