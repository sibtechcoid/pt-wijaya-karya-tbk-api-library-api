import Body from "../body";
import TypeObject from "@dikac/t-object/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";
import RencanaAccessType from "../../../../recana/boolean/type";
import ProyekAccessType from "../../../../proyek/boolean/type";
import SuratTugasAccessType from "../../../../surat-tugas/boolean/type";

export default function Typez(value : any) : value is Body {

    if(!TypeObject<Body>(value)) {

        return false;
    }


    if(value.rencana !== undefined) {

        if(!ArrayOf(value.rencana, RencanaAccessType))  {

            return false;
        }
    }


    if(value.proyek !== undefined) {

        if(!ArrayOf(value.proyek, ProyekAccessType))  {

            return false;
        }
    }


    if(value.suratTugas !== undefined) {

        if(!ArrayOf(value.suratTugas, SuratTugasAccessType))  {

            return false;
        }
    }

    return true;

}