import Level from "../body";
import InternalType from "../../../../../jenis-unit/create/request/body/boolean/type";
import IsFinite from "@dikac/t-number/boolean/finite";


export default function Type(value : any) : value is Level {

    if(!InternalType<Level>(value)) {

        return false;
    }

    if(!IsFinite(value.type)) {

        return false;
    }

    //    to be deprecated
    // if(!IsFinite(value.jenisUsaha)) {
    //
    //     return false;
    // }
    //
    return true;

}


