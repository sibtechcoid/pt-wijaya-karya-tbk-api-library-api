import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import RencanaAccessType from "../../../../recana/boolean/type";
import SuratTugasAccessType from "../../../../surat-tugas/boolean/type";
import ProyekAccessType from "../../../../proyek/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.rencana, RencanaAccessType))  {

        return false;
    }


    if(!ArrayOf(value.proyek, ProyekAccessType))  {

        return false;
    }


    if(!ArrayOf(value.suratTugas, SuratTugasAccessType))  {

        return false;
    }

    return true;

}