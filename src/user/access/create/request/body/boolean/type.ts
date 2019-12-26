import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import EnumType from "@dikac/t-enum/boolean/type";
import ProjectAccess from "../../../../proyek/access";
import ProjectAccessType from "../../../../proyek/boolean/type";
import UserAccess from "../../../../user/access";
import UserAccessType from "../../../../user/boolean/type";
import UnitKerjaAccess from "../../../../unit-kerja/access";
import UnitKerjaAccessType from "../../../../unit-kerja/boolean/type";
import RencanaAccess from "../../../../rencana/access";
import RencanaAccessType from "../../../../rencana/boolean/type";
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

    return true;

}