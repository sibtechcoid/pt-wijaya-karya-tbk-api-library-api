import Level from "../body";
import InternalType from "../../../../../jenis-unit/create/request/body/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type(value : any) : value is Level {

    if(!InternalType<Level>(value)) {

        return false;
    }

    if(!Positive(value.jenisUnit)) {

        return false;
    }

    return true;
}


