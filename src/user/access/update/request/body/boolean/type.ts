import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import UserAccessType from "../../../../user/boolean/type";
import ProjectAccessType from "../../../../proyek/boolean/type";
import UnitKerjaAccessType from "../../../../unit-kerja/boolean/type";
import RencanaAccessType from "../../../../rencana/boolean/type";
import LevelUsahaType from "../../../../level-usaha/boolean/type";
import JenisUsahaType from "../../../../jenis-usaha/boolean/type";
import JenisUnitType from "../../../../jenis-unit/boolean/type";
import AuditProgramType from "../../../../audit-program/boolean/type";
import KlausulType from "../../../../klausul/boolean/type";
import ProsedurType from "../../../../prosedur/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import LevelType from "../../../../level/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import TypeId from "../../../../../../id/boolean/type";

export default function Type(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(value.user !== undefined) {

        if(!ArrayOf(value.user, UserAccessType))  {

            return false;
        }
    }


    if(value.proyek !== undefined) {

        if(!ArrayOf(value.proyek, ProjectAccessType))  {

            return false;
        }
    }

    if(value.unitKerja !== undefined) {

        if(!ArrayOf(value.unitKerja, UnitKerjaAccessType))  {

            return false;
        }
    }

    if(value.rencana !== undefined) {

        if(!ArrayOf(value.rencana, RencanaAccessType))  {

            return false;
        }
    }

    if(value.levelUsaha !== undefined) {

        if(!ArrayOf(value.levelUsaha, LevelUsahaType))  {

            return false;
        }
    }

    if(value.jenisUsaha !== undefined) {

        if(!ArrayOf(value.jenisUsaha, JenisUsahaType))  {

            return false;
        }
    }

    if(value.jenisUnit !== undefined) {

        if(!ArrayOf(value.jenisUnit, JenisUnitType))  {

            return false;
        }
    }



  if(value.jenisUnit !== undefined) {

      if(!ArrayOf(value.auditProgram, AuditProgramType))  {

          return false;
      }
  }

  if(value.jenisUnit !== undefined) {

      if(!ArrayOf(value.klausul, KlausulType))  {

          return false;
      }
  }

  if(value.jenisUnit !== undefined) {

      if(!ArrayOf(value.prosedur, ProsedurType))  {

          return false;
      }
  }

  if(value.jenisUnit !== undefined) {

      if(!ArrayOf(value.fungsi, FungsiType))  {

          return false;
      }
  }

  if(value.jenisUnit !== undefined) {

      if(!ArrayOf(value.level, LevelType))  {

          return false;
      }
  }

    if(value.jabatan !== undefined) {

        if(!ArrayOf(value.jabatan, JabatanType))  {

            return false;
        }
    }

    return true;

}