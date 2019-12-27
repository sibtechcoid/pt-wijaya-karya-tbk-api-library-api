import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import ProjectAccessType from "../../../../proyek/boolean/type";
import jadwalRinciAccessType from "../../../../jadwal-rinci/boolean/type";
import RencanaAccessType from "../../../../rencana/boolean/type";


export default function Type(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(value.proyek !== undefined) {

        if(!ArrayOf(value.proyek, ProjectAccessType))  {

            return false;
        }
    }

    if(value.jadwalRinci !== undefined) {

        if(!ArrayOf(value.jadwalRinci, jadwalRinciAccessType))  {

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