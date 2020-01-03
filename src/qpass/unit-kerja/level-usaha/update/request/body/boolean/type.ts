import Level from "../body";
import InternalType from "../../../../../jenis-unit/update/request/body/boolean/type";
import IsFinite from "@dikac/t-number/boolean/finite";

export default function Type(value : any) : value is Level {

    if(!InternalType<Level>(value)) {

        return false;
    }

    if(value.type !== undefined) {

        if(!IsFinite(value.type)) {

            return false;
        }
    }

    // if(value.jenisUsaha !== undefined) {
    //
    //     if(!IsFinite(value.jenisUsaha)) {
    //
    //         return false;
    //     }
    // }

    return true;

}


