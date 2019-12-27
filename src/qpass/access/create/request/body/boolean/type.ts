import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ProjectAccessType from "../../../../proyek/boolean/type";
import RencanaAccessType from "../../../../rencana/boolean/type";
import JadwalRinciAccessType from "../../../../jadwal-rinci/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.proyek, ProjectAccessType))  {

        return false;
    }

    if(!ArrayOf(value.jadwalRinci, JadwalRinciAccessType))  {

        return false;
    }

    if(!ArrayOf(value.rencana, RencanaAccessType))  {

        return false;
    }

    return true;

}