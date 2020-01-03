import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ProjectAksesType from "../../../../proyek/boolean/type";
import RencanaAksesType from "../../../../rencana/boolean/type";
import JadwalRinciAksesType from "../../../../jadwal-rinci/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.proyek, ProjectAksesType))  {

        return false;
    }

    if(!ArrayOf(value.jadwalRinci, JadwalRinciAksesType))  {

        return false;
    }

    if(!ArrayOf(value.rencana, RencanaAksesType))  {

        return false;
    }

    return true;

}