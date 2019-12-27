import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ProjectAccessType from "../../../../proyek/boolean/type";
import UserAccessType from "../../../../user/boolean/type";
import UnitKerjaAccessType from "../../../../unit-kerja/boolean/type";
import RencanaAccessType from "../../../../rencana/boolean/type";
import LevelUsahaType from "../../../../level-usaha/boolean/type";
import JenisUsahaType from "../../../../jenis-usaha/boolean/type";
import JenisUnitType from "../../../../jenis-unit/boolean/type";
import AuditProgramType from "../../../../audit-program/boolean/type";
import KlausulType from "../../../../klausul/boolean/type";
import ProsedurType from "../../../../prosedur/boolean/type";
import LevelType from "../../../../level/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.user, UserAccessType))  {

        return false;
    }

    if(!ArrayOf(value.proyek, ProjectAccessType))  {

        return false;
    }

    if(!ArrayOf(value.unitKerja, UnitKerjaAccessType))  {

        return false;
    }

    if(!ArrayOf(value.rencana, RencanaAccessType))  {

        return false;
    }

    if(!ArrayOf(value.levelUsaha, LevelUsahaType))  {

        return false;
    }

    if(!ArrayOf(value.jenisUsaha, JenisUsahaType))  {

        return false;
    }

    if(!ArrayOf(value.jenisUnit, JenisUnitType))  {

        return false;
    }

    if(!ArrayOf(value.auditProgram, AuditProgramType))  {

        return false;
    }

    if(!ArrayOf(value.klausul, KlausulType))  {

        return false;
    }

    if(!ArrayOf(value.prosedur, ProsedurType))  {

        return false;
    }

    if(!ArrayOf(value.fungsi, FungsiType))  {

        return false;
    }

    if(!ArrayOf(value.level, LevelType))  {

        return false;
    }

    return true;

}