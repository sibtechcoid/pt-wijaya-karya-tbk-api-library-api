import Level from "../body";
import InternalType from "../../../../../jenis-unit/update/request/body/boolean/type";
import Positive from "@dikac/t-number/boolean/positive";

export default function Type(value : any) : value is Level {

    if(!InternalType<Level>(value)) {

        return false;
    }

    if(value.jenisUnit !== undefined) {

        if(!Positive(value.jenisUnit)) {

            return false;
        }
    }

    return true;
}


