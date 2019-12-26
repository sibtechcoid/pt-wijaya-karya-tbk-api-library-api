import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import EnumType from "@dikac/t-enum/boolean/type";
import UserAccess from "../../../../user/access";
import ProjectAccess from "../../../../proyek/access";
import ObjectAccess from "../../../../object/access";
import RencanaAccess from "../../../../rencana/access";
import UserAccessType from "../../../../user/boolean/type";
import ProjectAccessType from "../../../../proyek/boolean/type";
import UnitKerjaAccessType from "../../../../object/boolean/type";
import RencanaAccessType from "../../../../rencana/boolean/type";

export default function Type(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

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

    return true;

}