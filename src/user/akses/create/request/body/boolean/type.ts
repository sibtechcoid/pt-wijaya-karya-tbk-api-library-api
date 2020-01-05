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
import LevelType from "../../../../level/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import ProsesBisnisType from "../../../../proses-bisnis/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import Structure, {Validator} from "@dikac/t-object/boolean/structure";
import Where from "../../../../../../unit-kerja/reads/request/body/where/where";
import Undefinable from "@dikac/t-undefined/boolean/undefinable";
import BooleanType from "@dikac/t-boolean/type";
import StringType from "@dikac/t-string/boolean/type";
import TypeNumber from "@dikac/t-number/boolean/finite";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    let sort : Validator<Required<Body>> = {
        user : (v)=>ArrayOf(v, UserAksesType),
        proyek : (v)=>ArrayOf(v, ProjectAksesType),
        unitKerja : (v)=>ArrayOf(v, UnitKerjaAksesType),
        rencana : (v)=>ArrayOf(v, RencanaAksesType),
        levelUsaha : (v)=>ArrayOf(v, LevelUsahaType),
        jenisUsaha : (v)=>ArrayOf(v, JenisUsahaType),
        jenisUnit : (v)=>ArrayOf(v, JenisUnitType),
        auditProgram : (v)=>ArrayOf(v, AuditProgramType),
        klausul : (v)=>ArrayOf(v, KlausulType),
        prosedur : (v)=>ArrayOf(v, ProsedurType),
        fungsi : (v)=>ArrayOf(v, FungsiType),
        jabatan : (v)=>ArrayOf(v, JabatanType),
        level : (v)=>ArrayOf(v, LevelType),
        prosesBisnis : (v)=>ArrayOf(v, ProsesBisnisType),
    };

    return Structure(value, sort);
}