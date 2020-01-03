import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import ProjectAksesType from "../../../../proyek/boolean/type";
import jadwalRinciAksesType from "../../../../jadwal-rinci/boolean/type";
import RencanaAksesType from "../../../../rencana/boolean/type";
import TypeId from "../../../../../../id/boolean/type";


export default function Type(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }

    if(!TypeId(value)) {

        return false;
    }

    if(value.proyek !== undefined) {

        if(!ArrayOf(value.proyek, ProjectAksesType))  {

            return false;
        }
    }

    if(value.jadwalRinci !== undefined) {

        if(!ArrayOf(value.jadwalRinci, jadwalRinciAksesType))  {

            return false;
        }
    }

    if(value.rencana !== undefined) {

        if(!ArrayOf(value.rencana, RencanaAksesType))  {

            return false;
        }
    }

    return true;

}