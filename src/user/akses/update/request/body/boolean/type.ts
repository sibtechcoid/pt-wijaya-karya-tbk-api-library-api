import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import TypeId from "../../../../../../id/boolean/type";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import SuratTugasType from "../../../../surat-tugas/boolean/type";
import UserAksesType from "../../../../user/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import UnitKerjaAksesType from "../../../../unit-kerja/boolean/type";
import ProjectAksesType from "../../../../proyek/boolean/type";
import RencanaAksesType from "../../../../rencana/boolean/type";
import LevelUsahaType from "../../../../level-usaha/boolean/type";
import JenisUsahaType from "../../../../jenis-usaha/boolean/type";
import JenisUnitType from "../../../../jenis-unit/boolean/type";
import KlausulType from "../../../../klausul/boolean/type";
import ProsedurType from "../../../../prosedur/boolean/type";
import LevelType from "../../../../jadwal-rinci-level/boolean/type";
import AuditProgramType from "../../../../audit-program/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import JabatanAnggotaType from "../../../../jabatan-anggota/boolean/type";
import ProsesBisnisType from "../../../../proses-bisnis/boolean/type";
import JadwalRinciQpassType from "../../../../jadwal-rinci-qpass/boolean/type";
import JadwalRinciInternalType from "../../../../jadwal-rinci-internal/boolean/type";
import HasilTemuanQpassType from "../../../../hasil-temuan-qpass/boolean/type";
import HasilTemuanInternalType from "../../../../hasil-temuan-internal/boolean/type";
import HasilTemuanKriteriaType from "../../../../hasil-temuan-kriteria/boolean/type";
import HasilTemuanLevelType from "../../../../hasil-temuan-level/boolean/type";
import SuratTugasAccess from "../../../../surat-tugas/akses";
import UserAksesAccess from "../../../../user/akses";
import JabatanAccess from "../../../../jabatan/akses";
import UnitKerjaAksesAccess from "../../../../unit-kerja/akses";
import ProjectAksesAccess from "../../../../proyek/akses";
import RencanaAksesAccess from "../../../../rencana/akses";
import LevelUsahaAccess from "../../../../level-usaha/akses";
import JenisUsahaAccess from "../../../../jenis-usaha/akses";
import JenisUnitAccess from "../../../../jenis-unit/akses";
import KlausulAccess from "../../../../klausul/akses";
import ProsedurAccess from "../../../../prosedur/akses";
import LevelAccess from "../../../../jadwal-rinci-level/akses";
import AuditProgramAccess from "../../../../audit-program/akses";
import FungsiAccess from "../../../../fungsi/akses";
import JabatanAnggotaAccess from "../../../../jabatan-anggota/akses";
import ProsesBisnisAccess from "../../../../proses-bisnis/akses";
import JadwalRinciQpassAccess from "../../../../jadwal-rinci-qpass/akses";
import JadwalRinciInternalAccess from "../../../../jadwal-rinci-internal/akses";
import HasilTemuanQpassAccess from "../../../../hasil-temuan-qpass/akses";
import HasilTemuanInternalAccess from "../../../../hasil-temuan-internal/akses";
import HasilTemuanKriteriaAccess from "../../../../hasil-temuan-kriteria/akses";
import HasilTemuanLevelAccess from "../../../../hasil-temuan-level/akses";
import TypeNumber from "@dikac/t-number/boolean/finite";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";

export default function Type(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        id : TypeNumber,
        suratTugas            : (v)=>Undefinable(v,(v) : v is SuratTugasAccess[]           => ArrayOf(v, SuratTugasType)),
        user                  : (v)=>Undefinable(v,(v) : v is UserAksesAccess[]            => ArrayOf(v, UserAksesType)),
        jabatan               : (v)=>Undefinable(v,(v) : v is JabatanAccess[]              => ArrayOf(v, JabatanType)),
        unitKerja             : (v)=>Undefinable(v,(v) : v is UnitKerjaAksesAccess[]       => ArrayOf(v, UnitKerjaAksesType)),
        proyek                : (v)=>Undefinable(v,(v) : v is ProjectAksesAccess[]         => ArrayOf(v, ProjectAksesType)),
        rencana               : (v)=>Undefinable(v,(v) : v is RencanaAksesAccess[]         => ArrayOf(v, RencanaAksesType)),
        levelUsaha            : (v)=>Undefinable(v,(v) : v is LevelUsahaAccess[]           => ArrayOf(v, LevelUsahaType)),
        jenisUsaha            : (v)=>Undefinable(v,(v) : v is JenisUsahaAccess[]           => ArrayOf(v, JenisUsahaType)),
        jenisUnit             : (v)=>Undefinable(v,(v) : v is JenisUnitAccess[]            => ArrayOf(v, JenisUnitType)),
        klausul               : (v)=>Undefinable(v,(v) : v is KlausulAccess[]              => ArrayOf(v, KlausulType)),
        prosedur              : (v)=>Undefinable(v,(v) : v is ProsedurAccess[]             => ArrayOf(v, ProsedurType)),
        jadwalRinciLevel      : (v)=>Undefinable(v,(v) : v is LevelAccess[]                => ArrayOf(v, LevelType)),
        auditProgram          : (v)=>Undefinable(v,(v) : v is AuditProgramAccess[]         => ArrayOf(v, AuditProgramType)),
        fungsi                : (v)=>Undefinable(v,(v) : v is FungsiAccess[]               => ArrayOf(v, FungsiType)),
        jabatanAnggota        : (v)=>Undefinable(v,(v) : v is JabatanAnggotaAccess[]       => ArrayOf(v, JabatanAnggotaType)),
        prosesBisnis          : (v)=>Undefinable(v,(v) : v is ProsesBisnisAccess[]         => ArrayOf(v, ProsesBisnisType)),
        jadwalRinciQpass      : (v)=>Undefinable(v,(v) : v is JadwalRinciQpassAccess[]     => ArrayOf(v, JadwalRinciQpassType)),
        jadwalRinciInternal   : (v)=>Undefinable(v, (v) : v is JadwalRinciInternalAccess[] => ArrayOf(v, JadwalRinciInternalType)),
        hasilTemuanQpass      : (v)=>Undefinable(v,(v) : v is HasilTemuanQpassAccess[]     => ArrayOf(v, HasilTemuanQpassType)),
        hasilTemuanInternal   : (v)=>Undefinable(v, (v) : v is HasilTemuanInternalAccess[] => ArrayOf(v, HasilTemuanInternalType)),
        hasilTemuanKriteria   : (v)=>Undefinable(v,(v) : v is HasilTemuanKriteriaAccess[]  => ArrayOf(v, HasilTemuanKriteriaType)),
        hasilTemuanLevel      : (v)=>Undefinable(v, (v) : v is HasilTemuanLevelAccess[]    => ArrayOf(v, HasilTemuanLevelType)),
    };
    return Structure(value, sort);

}