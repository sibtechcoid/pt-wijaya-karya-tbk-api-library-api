import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ProjectAksesType from "../../../../proyek/boolean/type";
import UserAksesType from "../../../../user/boolean/type";
import UnitKerjaAksesType from "../../../../unit-kerja/boolean/type";
import RencanaAksesType from "../../../../rencana/boolean/type";
import LevelUsahaType from "../../../../level-usaha/boolean/type";
import JenisUsahaType from "../../../../jenis-usaha/boolean/type";
import JenisUnitType from "../../../../jenis-unit/boolean/type";
import AuditProgramType from "../../../../audit-program/boolean/type";
import KlausulType from "../../../../klausul/boolean/type";
import ProsedurType from "../../../../prosedur/boolean/type";
import LevelType from "../../../../jadwal-rinci-level/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import QpassHasilTemuanType from "../../../../qpass-hasil-temuan/boolean/type";
import InternalHasilTemuanType from "../../../../internal-hasil-temuan/boolean/type";
import QpassJadwalRinciType from "../../../../qpass-jadwal-rinci/boolean/type";
import InternalJadwalRinciType from "../../../../internal-jadwal-rinci/boolean/type";
import JabatanAnggotaType from "../../../../jabatan-anggota/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import SuratTugasType from "../../../../surat-tugas/boolean/type";
import ProsesBisnisType from "../../../../proses-bisnis/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        suratTugas          : (v)=>ArrayOf(v, SuratTugasType),
        user                : (v)=>ArrayOf(v, UserAksesType),
        jabatan             : (v)=>ArrayOf(v, JabatanType),
        unitKerja           : (v)=>ArrayOf(v, UnitKerjaAksesType),
        proyek              : (v)=>ArrayOf(v, ProjectAksesType),
        rencana             : (v)=>ArrayOf(v, RencanaAksesType),
        levelUsaha          : (v)=>ArrayOf(v, LevelUsahaType),
        jenisUsaha          : (v)=>ArrayOf(v, JenisUsahaType),
        jenisUnit           : (v)=>ArrayOf(v, JenisUnitType),
        klausul             : (v)=>ArrayOf(v, KlausulType),
        prosedur            : (v)=>ArrayOf(v, ProsedurType),
        jadwalRinciLevel    : (v)=>ArrayOf(v, LevelType),
        auditProgram        : (v)=>ArrayOf(v, AuditProgramType),
        fungsi              : (v)=>ArrayOf(v, FungsiType),
        jabatanAnggota      : (v)=>ArrayOf(v, JabatanAnggotaType),
        prosesBisnis        : (v)=>ArrayOf(v, ProsesBisnisType),
        qpassJadwalRinci    : (v)=>ArrayOf(v, QpassJadwalRinciType),
        internalJadwalRinci : (v)=>ArrayOf(v, InternalJadwalRinciType),
        qpassHasilTemuan    : (v)=>ArrayOf(v, QpassHasilTemuanType),
        internalHasilTemuan : (v)=>ArrayOf(v, InternalHasilTemuanType),
    };

    return Structure(value, sort);
}